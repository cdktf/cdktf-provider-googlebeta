# `googleComputeResizeRequest` Submodule <a name="`googleComputeResizeRequest` Submodule" id="@cdktf/provider-google-beta.googleComputeResizeRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeResizeRequest <a name="GoogleComputeResizeRequest" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request google_compute_resize_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequest;

GoogleComputeResizeRequest.Builder.create(Construct scope, java.lang.String id)
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
    .resizeBy(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestedRunDuration(GoogleComputeResizeRequestRequestedRunDuration)
//  .timeouts(GoogleComputeResizeRequestTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The reference of the instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resize-request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#id GoogleComputeResizeRequest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#project GoogleComputeResizeRequest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The reference of the compute zone scoping this request. If it is not provided, the provider zone is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.instanceGroupManager"></a>

- *Type:* java.lang.String

The reference of the instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#instance_group_manager GoogleComputeResizeRequest#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#name GoogleComputeResizeRequest#name}

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.resizeBy"></a>

- *Type:* java.lang.Number

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#resize_by GoogleComputeResizeRequest#resize_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#description GoogleComputeResizeRequest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#id GoogleComputeResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#project GoogleComputeResizeRequest#project}.

---

##### `requestedRunDuration`<sup>Optional</sup> <a name="requestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.requestedRunDuration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#requested_run_duration GoogleComputeResizeRequest#requested_run_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#timeouts GoogleComputeResizeRequest#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The reference of the compute zone scoping this request. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#zone GoogleComputeResizeRequest#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putRequestedRunDuration">putRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetRequestedRunDuration">resetRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequestedRunDuration` <a name="putRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putRequestedRunDuration"></a>

```java
public void putRequestedRunDuration(GoogleComputeResizeRequestRequestedRunDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putRequestedRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeResizeRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequestedRunDuration` <a name="resetRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetRequestedRunDuration"></a>

```java
public void resetRequestedRunDuration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeResizeRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequest;

GoogleComputeResizeRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequest;

GoogleComputeResizeRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequest;

GoogleComputeResizeRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequest;

GoogleComputeResizeRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeResizeRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeResizeRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeResizeRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeResizeRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeResizeRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference">GoogleComputeResizeRequestRequestedRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList">GoogleComputeResizeRequestStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference">GoogleComputeResizeRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.instanceGroupManagerInput">instanceGroupManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.requestedRunDurationInput">requestedRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.resizeByInput">resizeByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `requestedRunDuration`<sup>Required</sup> <a name="requestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.requestedRunDuration"></a>

```java
public GoogleComputeResizeRequestRequestedRunDurationOutputReference getRequestedRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference">GoogleComputeResizeRequestRequestedRunDurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.status"></a>

```java
public GoogleComputeResizeRequestStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList">GoogleComputeResizeRequestStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.timeouts"></a>

```java
public GoogleComputeResizeRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference">GoogleComputeResizeRequestTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceGroupManagerInput`<sup>Optional</sup> <a name="instanceGroupManagerInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.instanceGroupManagerInput"></a>

```java
public java.lang.String getInstanceGroupManagerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requestedRunDurationInput`<sup>Optional</sup> <a name="requestedRunDurationInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.requestedRunDurationInput"></a>

```java
public GoogleComputeResizeRequestRequestedRunDuration getRequestedRunDurationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a>

---

##### `resizeByInput`<sup>Optional</sup> <a name="resizeByInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.resizeByInput"></a>

```java
public java.lang.Number getResizeByInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.resizeBy"></a>

```java
public java.lang.Number getResizeBy();
```

- *Type:* java.lang.Number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeResizeRequestConfig <a name="GoogleComputeResizeRequestConfig" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestConfig;

GoogleComputeResizeRequestConfig.builder()
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
    .resizeBy(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .requestedRunDuration(GoogleComputeResizeRequestRequestedRunDuration)
//  .timeouts(GoogleComputeResizeRequestTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.instanceGroupManager">instanceGroupManager</a></code> | <code>java.lang.String</code> | The reference of the instance group manager this ResizeRequest is a part of. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.resizeBy">resizeBy</a></code> | <code>java.lang.Number</code> | The number of instances to be created by this resize request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resize-request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#id GoogleComputeResizeRequest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#project GoogleComputeResizeRequest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.requestedRunDuration">requestedRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a></code> | requested_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The reference of the compute zone scoping this request. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceGroupManager`<sup>Required</sup> <a name="instanceGroupManager" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.instanceGroupManager"></a>

```java
public java.lang.String getInstanceGroupManager();
```

- *Type:* java.lang.String

The reference of the instance group manager this ResizeRequest is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#instance_group_manager GoogleComputeResizeRequest#instance_group_manager}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resize request. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#name GoogleComputeResizeRequest#name}

---

##### `resizeBy`<sup>Required</sup> <a name="resizeBy" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.resizeBy"></a>

```java
public java.lang.Number getResizeBy();
```

- *Type:* java.lang.Number

The number of instances to be created by this resize request.

The group's target size will be increased by this number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#resize_by GoogleComputeResizeRequest#resize_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resize-request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#description GoogleComputeResizeRequest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#id GoogleComputeResizeRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#project GoogleComputeResizeRequest#project}.

---

##### `requestedRunDuration`<sup>Optional</sup> <a name="requestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.requestedRunDuration"></a>

```java
public GoogleComputeResizeRequestRequestedRunDuration getRequestedRunDuration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a>

requested_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#requested_run_duration GoogleComputeResizeRequest#requested_run_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.timeouts"></a>

```java
public GoogleComputeResizeRequestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#timeouts GoogleComputeResizeRequest#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The reference of the compute zone scoping this request. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#zone GoogleComputeResizeRequest#zone}

---

### GoogleComputeResizeRequestRequestedRunDuration <a name="GoogleComputeResizeRequestRequestedRunDuration" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestRequestedRunDuration;

GoogleComputeResizeRequestRequestedRunDuration.builder()
    .seconds(java.lang.String)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration.property.seconds">seconds</a></code> | <code>java.lang.String</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

Span of time at a resolution of a second.

Must be from 600 to 604800 inclusive. Note: minimum and maximum allowed range for requestedRunDuration is 10 minutes (600 seconds) and 7 days(604800 seconds) correspondingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#seconds GoogleComputeResizeRequest#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#nanos GoogleComputeResizeRequest#nanos}

---

### GoogleComputeResizeRequestStatus <a name="GoogleComputeResizeRequestStatus" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatus;

GoogleComputeResizeRequestStatus.builder()
    .build();
```


### GoogleComputeResizeRequestStatusError <a name="GoogleComputeResizeRequestStatusError" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusError;

GoogleComputeResizeRequestStatusError.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrors <a name="GoogleComputeResizeRequestStatusErrorErrors" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrors;

GoogleComputeResizeRequestStatusErrorErrors.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetails <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetails" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetails;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetails.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage.builder()
    .build();
```


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo;

GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttempt <a name="GoogleComputeResizeRequestStatusLastAttempt" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttempt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttempt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttempt;

GoogleComputeResizeRequestStatusLastAttempt.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptError <a name="GoogleComputeResizeRequestStatusLastAttemptError" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptError;

GoogleComputeResizeRequestStatusLastAttemptError.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrors <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrors" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrors;

GoogleComputeResizeRequestStatusLastAttemptErrorErrors.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage.builder()
    .build();
```


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo;

GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo.builder()
    .build();
```


### GoogleComputeResizeRequestTimeouts <a name="GoogleComputeResizeRequestTimeouts" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestTimeouts;

GoogleComputeResizeRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#create GoogleComputeResizeRequest#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#delete GoogleComputeResizeRequest#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#create GoogleComputeResizeRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resize_request#delete GoogleComputeResizeRequest#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeResizeRequestRequestedRunDurationOutputReference <a name="GoogleComputeResizeRequestRequestedRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestRequestedRunDurationOutputReference;

new GoogleComputeResizeRequestRequestedRunDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.seconds">seconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.secondsInput"></a>

```java
public java.lang.String getSecondsInput();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.seconds"></a>

```java
public java.lang.String getSeconds();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDurationOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestRequestedRunDuration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestRequestedRunDuration">GoogleComputeResizeRequestRequestedRunDuration</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```java
public StringMap getMetadatas();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfo</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinks</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList getLinks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelp</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessage</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetails">GoogleComputeResizeRequestStatusErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.help"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList getHelp();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList getLocalizedMessage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList getQuotaInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetails">GoogleComputeResizeRequestStatusErrorErrorsErrorDetails</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```java
public java.lang.Number getFutureLimit();
```

- *Type:* java.lang.Number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```java
public java.lang.String getLimitName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```java
public java.lang.String getRolloutStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsQuotaInfo</a>

---


### GoogleComputeResizeRequestStatusErrorErrorsList <a name="GoogleComputeResizeRequestStatusErrorErrorsList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsList;

new GoogleComputeResizeRequestStatusErrorErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorErrorsOutputReference <a name="GoogleComputeResizeRequestStatusErrorErrorsOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorErrorsOutputReference;

new GoogleComputeResizeRequestStatusErrorErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrors">GoogleComputeResizeRequestStatusErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.errorDetails"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList getErrorDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList">GoogleComputeResizeRequestStatusErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrors">GoogleComputeResizeRequestStatusErrorErrors</a>

---


### GoogleComputeResizeRequestStatusErrorList <a name="GoogleComputeResizeRequestStatusErrorList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorList;

new GoogleComputeResizeRequestStatusErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.get"></a>

```java
public GoogleComputeResizeRequestStatusErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusErrorOutputReference <a name="GoogleComputeResizeRequestStatusErrorOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusErrorOutputReference;

new GoogleComputeResizeRequestStatusErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList">GoogleComputeResizeRequestStatusErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusError">GoogleComputeResizeRequestStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.errors"></a>

```java
public GoogleComputeResizeRequestStatusErrorErrorsList getErrors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorErrorsList">GoogleComputeResizeRequestStatusErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusError">GoogleComputeResizeRequestStatusError</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas">metadatas</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `metadatas`<sup>Required</sup> <a name="metadatas" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.metadatas"></a>

```java
public StringMap getMetadatas();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfo</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinks</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.links"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList getLinks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpLinksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelp</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessage</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help">help</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage">localizedMessage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo">quotaInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.errorInfo"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsErrorInfoList</a>

---

##### `help`<sup>Required</sup> <a name="help" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.help"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList getHelp();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsHelpList</a>

---

##### `localizedMessage`<sup>Required</sup> <a name="localizedMessage" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.localizedMessage"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList getLocalizedMessage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsLocalizedMessageList</a>

---

##### `quotaInfo`<sup>Required</sup> <a name="quotaInfo" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.quotaInfo"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList getQuotaInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetails</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit">futureLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName">limitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus">rolloutStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `futureLimit`<sup>Required</sup> <a name="futureLimit" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.futureLimit"></a>

```java
public java.lang.Number getFutureLimit();
```

- *Type:* java.lang.Number

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitName`<sup>Required</sup> <a name="limitName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.limitName"></a>

```java
public java.lang.String getLimitName();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `rolloutStatus`<sup>Required</sup> <a name="rolloutStatus" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.rolloutStatus"></a>

```java
public java.lang.String getRolloutStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfoOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsQuotaInfo</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrors">GoogleComputeResizeRequestStatusLastAttemptErrorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.errorDetails"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList getErrorDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsErrorDetailsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrors">GoogleComputeResizeRequestStatusLastAttemptErrorErrors</a>

---


### GoogleComputeResizeRequestStatusLastAttemptErrorList <a name="GoogleComputeResizeRequestStatusLastAttemptErrorList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorList;

new GoogleComputeResizeRequestStatusLastAttemptErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptError">GoogleComputeResizeRequestStatusLastAttemptError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.errors"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList getErrors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList">GoogleComputeResizeRequestStatusLastAttemptErrorErrorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptError">GoogleComputeResizeRequestStatusLastAttemptError</a>

---


### GoogleComputeResizeRequestStatusLastAttemptList <a name="GoogleComputeResizeRequestStatusLastAttemptList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptList;

new GoogleComputeResizeRequestStatusLastAttemptList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.get"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusLastAttemptOutputReference <a name="GoogleComputeResizeRequestStatusLastAttemptOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusLastAttemptOutputReference;

new GoogleComputeResizeRequestStatusLastAttemptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList">GoogleComputeResizeRequestStatusLastAttemptErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttempt">GoogleComputeResizeRequestStatusLastAttempt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.error"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptErrorList">GoogleComputeResizeRequestStatusLastAttemptErrorList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatusLastAttempt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttempt">GoogleComputeResizeRequestStatusLastAttempt</a>

---


### GoogleComputeResizeRequestStatusList <a name="GoogleComputeResizeRequestStatusList" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusList;

new GoogleComputeResizeRequestStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.get"></a>

```java
public GoogleComputeResizeRequestStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleComputeResizeRequestStatusOutputReference <a name="GoogleComputeResizeRequestStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestStatusOutputReference;

new GoogleComputeResizeRequestStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList">GoogleComputeResizeRequestStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.lastAttempt">lastAttempt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList">GoogleComputeResizeRequestStatusLastAttemptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatus">GoogleComputeResizeRequestStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.error"></a>

```java
public GoogleComputeResizeRequestStatusErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusErrorList">GoogleComputeResizeRequestStatusErrorList</a>

---

##### `lastAttempt`<sup>Required</sup> <a name="lastAttempt" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.lastAttempt"></a>

```java
public GoogleComputeResizeRequestStatusLastAttemptList getLastAttempt();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusLastAttemptList">GoogleComputeResizeRequestStatusLastAttemptList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatusOutputReference.property.internalValue"></a>

```java
public GoogleComputeResizeRequestStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestStatus">GoogleComputeResizeRequestStatus</a>

---


### GoogleComputeResizeRequestTimeoutsOutputReference <a name="GoogleComputeResizeRequestTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resize_request.GoogleComputeResizeRequestTimeoutsOutputReference;

new GoogleComputeResizeRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResizeRequest.GoogleComputeResizeRequestTimeouts">GoogleComputeResizeRequestTimeouts</a>

---



