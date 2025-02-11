# `googleComputeAutoscaler` Submodule <a name="`googleComputeAutoscaler` Submodule" id="@cdktf/provider-google-beta.googleComputeAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeAutoscaler <a name="GoogleComputeAutoscaler" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler google_compute_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscaler;

GoogleComputeAutoscaler.Builder.create(Construct scope, java.lang.String id)
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
    .autoscalingPolicy(GoogleComputeAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeAutoscalerTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | URL of the zone where the instance group resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#autoscaling_policy GoogleComputeAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.target"></a>

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#description GoogleComputeAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#timeouts GoogleComputeAutoscaler#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#zone GoogleComputeAutoscaler#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy"></a>

```java
public void putAutoscalingPolicy(GoogleComputeAutoscalerAutoscalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeAutoscalerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscaler;

GoogleComputeAutoscaler.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscaler;

GoogleComputeAutoscaler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscaler;

GoogleComputeAutoscaler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscaler;

GoogleComputeAutoscaler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeAutoscaler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeAutoscaler resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeAutoscaler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference">GoogleComputeAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference">GoogleComputeAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicy"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyOutputReference getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference">GoogleComputeAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeouts"></a>

```java
public GoogleComputeAutoscalerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference">GoogleComputeAutoscalerTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.autoscalingPolicyInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicy getAutoscalingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscaler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeAutoscalerAutoscalingPolicy <a name="GoogleComputeAutoscalerAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicy;

GoogleComputeAutoscalerAutoscalingPolicy.builder()
    .maxReplicas(java.lang.Number)
    .minReplicas(java.lang.Number)
//  .cooldownPeriod(java.lang.Number)
//  .cpuUtilization(GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization)
//  .loadBalancingUtilization(GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization)
//  .metric(IResolvable)
//  .metric(java.util.List<GoogleComputeAutoscalerAutoscalingPolicyMetric>)
//  .mode(java.lang.String)
//  .scaleDownControl(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl)
//  .scaleInControl(GoogleComputeAutoscalerAutoscalingPolicyScaleInControl)
//  .scalingSchedules(IResolvable)
//  .scalingSchedules(java.util.List<GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleDownControl">scaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | scale_down_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scalingSchedules">scalingSchedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | scaling_schedules block. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#max_replicas GoogleComputeAutoscaler#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#min_replicas GoogleComputeAutoscaler#min_replicas}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```java
public java.lang.Number getCooldownPeriod();
```

- *Type:* java.lang.Number

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#cooldown_period GoogleComputeAutoscaler#cooldown_period}

---

##### `cpuUtilization`<sup>Optional</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#cpu_utilization GoogleComputeAutoscaler#cpu_utilization}

---

##### `loadBalancingUtilization`<sup>Optional</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#load_balancing_utilization GoogleComputeAutoscaler#load_balancing_utilization}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#metric GoogleComputeAutoscaler#metric}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#mode GoogleComputeAutoscaler#mode}

---

##### `scaleDownControl`<sup>Optional</sup> <a name="scaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleDownControl"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl getScaleDownControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

scale_down_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#scale_down_control GoogleComputeAutoscaler#scale_down_control}

---

##### `scaleInControl`<sup>Optional</sup> <a name="scaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#scale_in_control GoogleComputeAutoscaler#scale_in_control}

---

##### `scalingSchedules`<sup>Optional</sup> <a name="scalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```java
public java.lang.Object getScalingSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#scaling_schedules GoogleComputeAutoscaler#scaling_schedules}

---

### GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization <a name="GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization;

GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.builder()
    .target(java.lang.Number)
//  .predictiveMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `predictiveMethod`<sup>Optional</sup> <a name="predictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#predictive_method GoogleComputeAutoscaler#predictive_method}

---

### GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization;

GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.builder()
    .target(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

### GoogleComputeAutoscalerAutoscalingPolicyMetric <a name="GoogleComputeAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric;

GoogleComputeAutoscalerAutoscalingPolicyMetric.builder()
    .name(java.lang.String)
//  .filter(java.lang.String)
//  .singleInstanceAssignment(java.lang.Number)
//  .target(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.name">name</a></code> | <code>java.lang.String</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.filter">filter</a></code> | <code>java.lang.String</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">singleInstanceAssignment</a></code> | <code>java.lang.Number</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.target">target</a></code> | <code>java.lang.Number</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.type">type</a></code> | <code>java.lang.String</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data.

You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.

The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.

If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.

If not specified, the type defaults to gce_instance.

You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#filter GoogleComputeAutoscaler#filter}

---

##### `singleInstanceAssignment`<sup>Optional</sup> <a name="singleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

```java
public java.lang.Number getSingleInstanceAssignment();
```

- *Type:* java.lang.Number

If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group.

The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.

For example, a good metric to use with the target is
'pubsub.googleapis.com/subscription/num_undelivered_messages'
or a custom metric exporting the total number of requests coming to
your instances.

A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#single_instance_assignment GoogleComputeAutoscaler#single_instance_assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#type GoogleComputeAutoscaler#type}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl;

GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.builder()
//  .maxScaledDownReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas)
//  .timeWindowSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas">maxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | max_scaled_down_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledDownReplicas`<sup>Optional</sup> <a name="maxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.maxScaledDownReplicas"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas getMaxScaledDownReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

max_scaled_down_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#max_scaled_down_replicas GoogleComputeAutoscaler#max_scaled_down_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#time_window_sec GoogleComputeAutoscaler#time_window_sec}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas;

GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.builder()
//  .fixed(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#fixed GoogleComputeAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#percent GoogleComputeAutoscaler#percent}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleInControl <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl;

GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.builder()
//  .maxScaledInReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas)
//  .timeWindowSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledInReplicas`<sup>Optional</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#max_scaled_in_replicas GoogleComputeAutoscaler#max_scaled_in_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#time_window_sec GoogleComputeAutoscaler#time_window_sec}

---

### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.builder()
//  .fixed(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#fixed GoogleComputeAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#percent GoogleComputeAutoscaler#percent}

---

### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules;

GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.builder()
    .durationSec(java.lang.Number)
    .minRequiredReplicas(java.lang.Number)
    .name(java.lang.String)
    .schedule(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description">description</a></code> | <code>java.lang.String</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone to be used when interpreting the schedule. |

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#duration_sec GoogleComputeAutoscaler#duration_sec}

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#min_required_replicas GoogleComputeAutoscaler#min_required_replicas}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#schedule GoogleComputeAutoscaler#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#description GoogleComputeAutoscaler#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#disabled GoogleComputeAutoscaler#disabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#time_zone GoogleComputeAutoscaler#time_zone}

---

### GoogleComputeAutoscalerConfig <a name="GoogleComputeAutoscalerConfig" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerConfig;

GoogleComputeAutoscalerConfig.builder()
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
    .autoscalingPolicy(GoogleComputeAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeAutoscalerTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | URL of the zone where the instance group resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.autoscalingPolicy"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicy getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#autoscaling_policy GoogleComputeAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#name GoogleComputeAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#target GoogleComputeAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#description GoogleComputeAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#id GoogleComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#project GoogleComputeAutoscaler#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.timeouts"></a>

```java
public GoogleComputeAutoscalerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#timeouts GoogleComputeAutoscaler#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#zone GoogleComputeAutoscaler#zone}

---

### GoogleComputeAutoscalerTimeouts <a name="GoogleComputeAutoscalerTimeouts" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerTimeouts;

GoogleComputeAutoscalerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#create GoogleComputeAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#delete GoogleComputeAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#update GoogleComputeAutoscaler#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#create GoogleComputeAutoscaler#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#delete GoogleComputeAutoscaler#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_autoscaler#update GoogleComputeAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">resetPredictiveMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictiveMethod` <a name="resetPredictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```java
public void resetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">predictiveMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictiveMethodInput`<sup>Optional</sup> <a name="predictiveMethodInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```java
public java.lang.String getPredictiveMethodInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `predictiveMethod`<sup>Required</sup> <a name="predictiveMethod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyMetricList <a name="GoogleComputeAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList;

new GoogleComputeAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>>

---


### GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">resetSingleInstanceAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetSingleInstanceAssignment` <a name="resetSingleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```java
public void resetSingleInstanceAssignment()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">singleInstanceAssignmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">singleInstanceAssignment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `singleInstanceAssignmentInput`<sup>Optional</sup> <a name="singleInstanceAssignmentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```java
public java.lang.Number getSingleInstanceAssignmentInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `singleInstanceAssignment`<sup>Required</sup> <a name="singleInstanceAssignment" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```java
public java.lang.Number getSingleInstanceAssignment();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">putLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl">putScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">putScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">putScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">resetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">resetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl">resetScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">resetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">resetScalingSchedules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```java
public void putCpuUtilization(GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `putLoadBalancingUtilization` <a name="putLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```java
public void putLoadBalancingUtilization(GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<GoogleComputeAutoscalerAutoscalingPolicyMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>>

---

##### `putScaleDownControl` <a name="putScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl"></a>

```java
public void putScaleDownControl(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleDownControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `putScaleInControl` <a name="putScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```java
public void putScaleInControl(GoogleComputeAutoscalerAutoscalingPolicyScaleInControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `putScalingSchedules` <a name="putScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```java
public void putScalingSchedules(IResolvable OR java.util.List<GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```java
public void resetCooldownPeriod()
```

##### `resetCpuUtilization` <a name="resetCpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```java
public void resetCpuUtilization()
```

##### `resetLoadBalancingUtilization` <a name="resetLoadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```java
public void resetLoadBalancingUtilization()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetScaleDownControl` <a name="resetScaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleDownControl"></a>

```java
public void resetScaleDownControl()
```

##### `resetScaleInControl` <a name="resetScaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```java
public void resetScaleInControl()
```

##### `resetScalingSchedules` <a name="resetScalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```java
public void resetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList">GoogleComputeAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl">scaleDownControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">scalingSchedules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">loadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput">scaleDownControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">scaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">scalingSchedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `loadBalancingUtilization`<sup>Required</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetricList">GoogleComputeAutoscalerAutoscalingPolicyMetricList</a>

---

##### `scaleDownControl`<sup>Required</sup> <a name="scaleDownControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControl"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference getScaleDownControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference</a>

---

##### `scaleInControl`<sup>Required</sup> <a name="scaleInControl" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `scalingSchedules`<sup>Required</sup> <a name="scalingSchedules" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList getScalingSchedules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```java
public java.lang.Number getCooldownPeriodInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization">GoogleComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `loadBalancingUtilizationInput`<sup>Optional</sup> <a name="loadBalancingUtilizationInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">GoogleComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyMetric">GoogleComputeAutoscalerAutoscalingPolicyMetric</a>>

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `scaleDownControlInput`<sup>Optional</sup> <a name="scaleDownControlInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleDownControlInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl getScaleDownControlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---

##### `scaleInControlInput`<sup>Optional</sup> <a name="scaleInControlInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl getScaleInControlInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `scalingSchedulesInput`<sup>Optional</sup> <a name="scalingSchedulesInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```java
public java.lang.Object getScalingSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```java
public java.lang.Number getCooldownPeriod();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicy">GoogleComputeAutoscalerAutoscalingPolicy</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas">putMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas">resetMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledDownReplicas` <a name="putMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas"></a>

```java
public void putMaxScaledDownReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.putMaxScaledDownReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `resetMaxScaledDownReplicas` <a name="resetMaxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetMaxScaledDownReplicas"></a>

```java
public void resetMaxScaledDownReplicas()
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.resetTimeWindowSec"></a>

```java
public void resetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas">maxScaledDownReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput">maxScaledDownReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaledDownReplicas`<sup>Required</sup> <a name="maxScaledDownReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicas"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference getMaxScaledDownReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicasOutputReference</a>

---

##### `maxScaledDownReplicasInput`<sup>Optional</sup> <a name="maxScaledDownReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.maxScaledDownReplicasInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas getMaxScaledDownReplicasInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSecInput"></a>

```java
public java.lang.Number getTimeWindowSecInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControlOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl">GoogleComputeAutoscalerAutoscalingPolicyScaleDownControl</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">putMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">resetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledInReplicas` <a name="putMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```java
public void putMaxScaledInReplicas(GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `resetMaxScaledInReplicas` <a name="resetMaxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```java
public void resetMaxScaledInReplicas()
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```java
public void resetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">maxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaledInReplicas`<sup>Required</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `maxScaledInReplicasInput`<sup>Optional</sup> <a name="maxScaledInReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicasInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">GoogleComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```java
public java.lang.Number getTimeWindowSecInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScaleInControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScaleInControl">GoogleComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---


### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList;

new GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```java
public GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---


### GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference;

new GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">durationSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">minRequiredReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSecInput`<sup>Optional</sup> <a name="durationSecInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```java
public java.lang.Number getDurationSecInput();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicasInput`<sup>Optional</sup> <a name="minRequiredReplicasInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```java
public java.lang.Number getMinRequiredReplicasInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules">GoogleComputeAutoscalerAutoscalingPolicyScalingSchedules</a>

---


### GoogleComputeAutoscalerTimeoutsOutputReference <a name="GoogleComputeAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_autoscaler.GoogleComputeAutoscalerTimeoutsOutputReference;

new GoogleComputeAutoscalerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeAutoscaler.GoogleComputeAutoscalerTimeouts">GoogleComputeAutoscalerTimeouts</a>

---



