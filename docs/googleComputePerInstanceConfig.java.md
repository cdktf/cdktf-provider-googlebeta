# `googleComputePerInstanceConfig` Submodule <a name="`googleComputePerInstanceConfig` Submodule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePerInstanceConfig <a name="GoogleComputePerInstanceConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config google_compute_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfig;

GoogleComputePerInstanceConfig.Builder.create(Construct scope, java.lang.String id)
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
    .instanceGroupManager(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .minimalAction(java.lang.String)
//  .mostDisruptiveAllowedAction(java.lang.String)
//  .preservedState(GoogleComputePerInstanceConfigPreservedState)
//  .project(java.lang.String)
//  .removeInstanceOnDestroy(java.lang.Boolean)
//  .removeInstanceOnDestroy(IResolvable)
//  .removeInstanceStateOnDestroy(java.lang.Boolean)
//  .removeInstanceStateOnDestroy(IResolvable)
//  .timeouts(GoogleComputePerInstanceConfigTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing instance group manager is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.instanceGroupManager"></a>

- *Type:* java.lang.String

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#instance_group_manager GoogleComputePerInstanceConfig#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#name GoogleComputePerInstanceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.minimalAction"></a>

- *Type:* java.lang.String

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#minimal_action GoogleComputePerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction"></a>

- *Type:* java.lang.String

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#most_disruptive_allowed_action GoogleComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.preservedState"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#preserved_state GoogleComputePerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}.

---

##### `removeInstanceOnDestroy`<sup>Optional</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.removeInstanceOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#remove_instance_on_destroy GoogleComputePerInstanceConfig#remove_instance_on_destroy}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#remove_instance_state_on_destroy GoogleComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#timeouts GoogleComputePerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#zone GoogleComputePerInstanceConfig#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState">putPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction">resetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState">resetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy">resetRemoveInstanceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy">resetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreservedState` <a name="putPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState"></a>

```java
public void putPreservedState(GoogleComputePerInstanceConfigPreservedState value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputePerInstanceConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMinimalAction` <a name="resetMinimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMinimalAction"></a>

```java
public void resetMinimalAction()
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```java
public void resetMostDisruptiveAllowedAction()
```

##### `resetPreservedState` <a name="resetPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetPreservedState"></a>

```java
public void resetPreservedState()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRemoveInstanceOnDestroy` <a name="resetRemoveInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceOnDestroy"></a>

```java
public void resetRemoveInstanceOnDestroy()
```

##### `resetRemoveInstanceStateOnDestroy` <a name="resetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```java
public void resetRemoveInstanceStateOnDestroy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfig;

GoogleComputePerInstanceConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfig;

GoogleComputePerInstanceConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfig;

GoogleComputePerInstanceConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfig;

GoogleComputePerInstanceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputePerInstanceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputePerInstanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputePerInstanceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputePerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput">minimalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput">preservedStateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput">removeInstanceOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput">removeInstanceStateOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `preservedState`<sup>Required</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedState"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateOutputReference getPreservedState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference">GoogleComputePerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeouts"></a>

```java
public GoogleComputePerInstanceConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference">GoogleComputePerInstanceConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManagerInput"></a>

```java
public java.lang.String getInstanceGroupManagerInput();
```

- *Type:* java.lang.String

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalActionInput"></a>

```java
public java.lang.String getMinimalActionInput();
```

- *Type:* java.lang.String

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```java
public java.lang.String getMostDisruptiveAllowedActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preservedStateInput`<sup>Optional</sup> <a name="preservedStateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.preservedStateInput"></a>

```java
public GoogleComputePerInstanceConfigPreservedState getPreservedStateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `removeInstanceOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroyInput"></a>

```java
public java.lang.Object getRemoveInstanceOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceStateOnDestroyInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `removeInstanceOnDestroy`<sup>Required</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeInstanceStateOnDestroy`<sup>Required</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePerInstanceConfigConfig <a name="GoogleComputePerInstanceConfigConfig" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigConfig;

GoogleComputePerInstanceConfigConfig.builder()
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
    .instanceGroupManager(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .minimalAction(java.lang.String)
//  .mostDisruptiveAllowedAction(java.lang.String)
//  .preservedState(GoogleComputePerInstanceConfigPreservedState)
//  .project(java.lang.String)
//  .removeInstanceOnDestroy(java.lang.Boolean)
//  .removeInstanceOnDestroy(IResolvable)
//  .removeInstanceStateOnDestroy(java.lang.Boolean)
//  .removeInstanceStateOnDestroy(IResolvable)
//  .timeouts(GoogleComputePerInstanceConfigTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy">removeInstanceOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#instance_group_manager GoogleComputePerInstanceConfig#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#name GoogleComputePerInstanceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#id GoogleComputePerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#minimal_action GoogleComputePerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#most_disruptive_allowed_action GoogleComputePerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.preservedState"></a>

```java
public GoogleComputePerInstanceConfigPreservedState getPreservedState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#preserved_state GoogleComputePerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#project GoogleComputePerInstanceConfig#project}.

---

##### `removeInstanceOnDestroy`<sup>Optional</sup> <a name="removeInstanceOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove the underlying instance.

When false, deleting this config will use the behavior as determined by remove_instance_on_destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#remove_instance_on_destroy GoogleComputePerInstanceConfig#remove_instance_on_destroy}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#remove_instance_state_on_destroy GoogleComputePerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.timeouts"></a>

```java
public GoogleComputePerInstanceConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#timeouts GoogleComputePerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#zone GoogleComputePerInstanceConfig#zone}

---

### GoogleComputePerInstanceConfigPreservedState <a name="GoogleComputePerInstanceConfigPreservedState" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedState;

GoogleComputePerInstanceConfigPreservedState.builder()
//  .disk(IResolvable)
//  .disk(java.util.List<GoogleComputePerInstanceConfigPreservedStateDisk>)
//  .externalIp(IResolvable)
//  .externalIp(java.util.List<GoogleComputePerInstanceConfigPreservedStateExternalIp>)
//  .internalIp(IResolvable)
//  .internalIp(java.util.List<GoogleComputePerInstanceConfigPreservedStateInternalIp>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp">externalIp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp">internalIp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>></code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#disk GoogleComputePerInstanceConfig#disk}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.externalIp"></a>

```java
public java.lang.Object getExternalIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#external_ip GoogleComputePerInstanceConfig#external_ip}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.internalIp"></a>

```java
public java.lang.Object getInternalIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>>

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#internal_ip GoogleComputePerInstanceConfig#internal_ip}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#metadata GoogleComputePerInstanceConfig#metadata}

---

### GoogleComputePerInstanceConfigPreservedStateDisk <a name="GoogleComputePerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateDisk;

GoogleComputePerInstanceConfigPreservedStateDisk.builder()
    .deviceName(java.lang.String)
    .source(java.lang.String)
//  .deleteRule(java.lang.String)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>java.lang.String</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#device_name GoogleComputePerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#source GoogleComputePerInstanceConfig#source}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#delete_rule GoogleComputePerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#mode GoogleComputePerInstanceConfig#mode}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIp <a name="GoogleComputePerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateExternalIp;

GoogleComputePerInstanceConfigPreservedStateExternalIp.builder()
    .interfaceName(java.lang.String)
//  .autoDelete(java.lang.String)
//  .ipAddress(GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress;

GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.builder()
//  .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address">address</a></code> | <code>java.lang.String</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIp <a name="GoogleComputePerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateInternalIp;

GoogleComputePerInstanceConfigPreservedStateInternalIp.builder()
    .interfaceName(java.lang.String)
//  .autoDelete(java.lang.String)
//  .ipAddress(GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#interface_name GoogleComputePerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#auto_delete GoogleComputePerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#ip_address GoogleComputePerInstanceConfig#ip_address}

---

### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress;

GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.builder()
//  .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address">address</a></code> | <code>java.lang.String</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#address GoogleComputePerInstanceConfig#address}

---

### GoogleComputePerInstanceConfigTimeouts <a name="GoogleComputePerInstanceConfigTimeouts" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigTimeouts;

GoogleComputePerInstanceConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#create GoogleComputePerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#delete GoogleComputePerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_per_instance_config#update GoogleComputePerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePerInstanceConfigPreservedStateDiskList <a name="GoogleComputePerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateDiskList;

new GoogleComputePerInstanceConfigPreservedStateDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>>

---


### GoogleComputePerInstanceConfigPreservedStateDiskOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference;

new GoogleComputePerInstanceConfigPreservedStateDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```java
public void resetDeleteRule()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```java
public java.lang.String getDeleteRuleInput();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference;

new GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```java
public void resetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateExternalIpList;

new GoogleComputePerInstanceConfigPreservedStateExternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>>

---


### GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference;

new GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```java
public void putIpAddress(GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.String getAutoDeleteInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress getIpAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference;

new GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```java
public void resetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpList <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateInternalIpList;

new GoogleComputePerInstanceConfigPreservedStateInternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>>

---


### GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference;

new GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```java
public void putIpAddress(GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.String getAutoDeleteInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress getIpAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress">GoogleComputePerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>

---


### GoogleComputePerInstanceConfigPreservedStateOutputReference <a name="GoogleComputePerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigPreservedStateOutputReference;

new GoogleComputePerInstanceConfigPreservedStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp">putInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<GoogleComputePerInstanceConfigPreservedStateDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>>

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```java
public void putExternalIp(IResolvable OR java.util.List<GoogleComputePerInstanceConfigPreservedStateExternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>>

---

##### `putInternalIp` <a name="putInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```java
public void putInternalIp(IResolvable OR java.util.List<GoogleComputePerInstanceConfigPreservedStateInternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>>

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```java
public void resetExternalIp()
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```java
public void resetInternalIp()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp">internalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDiskList">GoogleComputePerInstanceConfigPreservedStateDiskList</a>

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateExternalIpList getExternalIp();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIpList">GoogleComputePerInstanceConfigPreservedStateExternalIpList</a>

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```java
public GoogleComputePerInstanceConfigPreservedStateInternalIpList getInternalIp();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIpList">GoogleComputePerInstanceConfigPreservedStateInternalIpList</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateDisk">GoogleComputePerInstanceConfigPreservedStateDisk</a>>

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```java
public java.lang.Object getExternalIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateExternalIp">GoogleComputePerInstanceConfigPreservedStateExternalIp</a>>

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```java
public java.lang.Object getInternalIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateInternalIp">GoogleComputePerInstanceConfigPreservedStateInternalIp</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```java
public GoogleComputePerInstanceConfigPreservedState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigPreservedState">GoogleComputePerInstanceConfigPreservedState</a>

---


### GoogleComputePerInstanceConfigTimeoutsOutputReference <a name="GoogleComputePerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_per_instance_config.GoogleComputePerInstanceConfigTimeoutsOutputReference;

new GoogleComputePerInstanceConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputePerInstanceConfig.GoogleComputePerInstanceConfigTimeouts">GoogleComputePerInstanceConfigTimeouts</a>

---



