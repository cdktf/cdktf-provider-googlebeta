# `googleComputeResourcePolicy` Submodule <a name="`googleComputeResourcePolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeResourcePolicy <a name="GoogleComputeResourcePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicy;

GoogleComputeResourcePolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .diskConsistencyGroupPolicy(GoogleComputeResourcePolicyDiskConsistencyGroupPolicy)
//  .groupPlacementPolicy(GoogleComputeResourcePolicyGroupPlacementPolicy)
//  .id(java.lang.String)
//  .instanceSchedulePolicy(GoogleComputeResourcePolicyInstanceSchedulePolicy)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .snapshotSchedulePolicy(GoogleComputeResourcePolicySnapshotSchedulePolicy)
//  .timeouts(GoogleComputeResourcePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | disk_consistency_group_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | group_placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | instance_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where resource policy resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | snapshot_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#name GoogleComputeResourcePolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#description GoogleComputeResourcePolicy#description}

---

##### `diskConsistencyGroupPolicy`<sup>Optional</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.diskConsistencyGroupPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

disk_consistency_group_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#disk_consistency_group_policy GoogleComputeResourcePolicy#disk_consistency_group_policy}

---

##### `groupPlacementPolicy`<sup>Optional</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.groupPlacementPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

group_placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#group_placement_policy GoogleComputeResourcePolicy#group_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceSchedulePolicy`<sup>Optional</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.instanceSchedulePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

instance_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#instance_schedule_policy GoogleComputeResourcePolicy#instance_schedule_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#region GoogleComputeResourcePolicy#region}

---

##### `snapshotSchedulePolicy`<sup>Optional</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.snapshotSchedulePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

snapshot_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#snapshot_schedule_policy GoogleComputeResourcePolicy#snapshot_schedule_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#timeouts GoogleComputeResourcePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy">putDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy">putGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy">putInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy">putSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDiskConsistencyGroupPolicy">resetDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetGroupPlacementPolicy">resetGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetInstanceSchedulePolicy">resetInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetSnapshotSchedulePolicy">resetSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiskConsistencyGroupPolicy` <a name="putDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy"></a>

```java
public void putDiskConsistencyGroupPolicy(GoogleComputeResourcePolicyDiskConsistencyGroupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---

##### `putGroupPlacementPolicy` <a name="putGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy"></a>

```java
public void putGroupPlacementPolicy(GoogleComputeResourcePolicyGroupPlacementPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `putInstanceSchedulePolicy` <a name="putInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy"></a>

```java
public void putInstanceSchedulePolicy(GoogleComputeResourcePolicyInstanceSchedulePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `putSnapshotSchedulePolicy` <a name="putSnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy"></a>

```java
public void putSnapshotSchedulePolicy(GoogleComputeResourcePolicySnapshotSchedulePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeResourcePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskConsistencyGroupPolicy` <a name="resetDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDiskConsistencyGroupPolicy"></a>

```java
public void resetDiskConsistencyGroupPolicy()
```

##### `resetGroupPlacementPolicy` <a name="resetGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetGroupPlacementPolicy"></a>

```java
public void resetGroupPlacementPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceSchedulePolicy` <a name="resetInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetInstanceSchedulePolicy"></a>

```java
public void resetInstanceSchedulePolicy()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSnapshotSchedulePolicy` <a name="resetSnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetSnapshotSchedulePolicy"></a>

```java
public void resetSnapshotSchedulePolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicy;

GoogleComputeResourcePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicy;

GoogleComputeResourcePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicy;

GoogleComputeResourcePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicy;

GoogleComputeResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference">GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference">GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference">GoogleComputeResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicyInput">diskConsistencyGroupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicyInput">groupPlacementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicyInput">instanceSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicyInput">snapshotSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskConsistencyGroupPolicy`<sup>Required</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy"></a>

```java
public GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference getDiskConsistencyGroupPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference">GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference</a>

---

##### `groupPlacementPolicy`<sup>Required</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicy"></a>

```java
public GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference getGroupPlacementPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference">GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference</a>

---

##### `instanceSchedulePolicy`<sup>Required</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference getInstanceSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `snapshotSchedulePolicy`<sup>Required</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference getSnapshotSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeouts"></a>

```java
public GoogleComputeResourcePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference">GoogleComputeResourcePolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskConsistencyGroupPolicyInput`<sup>Optional</sup> <a name="diskConsistencyGroupPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicyInput"></a>

```java
public GoogleComputeResourcePolicyDiskConsistencyGroupPolicy getDiskConsistencyGroupPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---

##### `groupPlacementPolicyInput`<sup>Optional</sup> <a name="groupPlacementPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicyInput"></a>

```java
public GoogleComputeResourcePolicyGroupPlacementPolicy getGroupPlacementPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceSchedulePolicyInput`<sup>Optional</sup> <a name="instanceSchedulePolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicyInput"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicy getInstanceSchedulePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `snapshotSchedulePolicyInput`<sup>Optional</sup> <a name="snapshotSchedulePolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicyInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicy getSnapshotSchedulePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeResourcePolicyConfig <a name="GoogleComputeResourcePolicyConfig" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyConfig;

GoogleComputeResourcePolicyConfig.builder()
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
//  .description(java.lang.String)
//  .diskConsistencyGroupPolicy(GoogleComputeResourcePolicyDiskConsistencyGroupPolicy)
//  .groupPlacementPolicy(GoogleComputeResourcePolicyGroupPlacementPolicy)
//  .id(java.lang.String)
//  .instanceSchedulePolicy(GoogleComputeResourcePolicyInstanceSchedulePolicy)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .snapshotSchedulePolicy(GoogleComputeResourcePolicySnapshotSchedulePolicy)
//  .timeouts(GoogleComputeResourcePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | disk_consistency_group_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | group_placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | instance_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where resource policy resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | snapshot_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#name GoogleComputeResourcePolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#description GoogleComputeResourcePolicy#description}

---

##### `diskConsistencyGroupPolicy`<sup>Optional</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.diskConsistencyGroupPolicy"></a>

```java
public GoogleComputeResourcePolicyDiskConsistencyGroupPolicy getDiskConsistencyGroupPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

disk_consistency_group_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#disk_consistency_group_policy GoogleComputeResourcePolicy#disk_consistency_group_policy}

---

##### `groupPlacementPolicy`<sup>Optional</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.groupPlacementPolicy"></a>

```java
public GoogleComputeResourcePolicyGroupPlacementPolicy getGroupPlacementPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

group_placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#group_placement_policy GoogleComputeResourcePolicy#group_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceSchedulePolicy`<sup>Optional</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.instanceSchedulePolicy"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicy getInstanceSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

instance_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#instance_schedule_policy GoogleComputeResourcePolicy#instance_schedule_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#region GoogleComputeResourcePolicy#region}

---

##### `snapshotSchedulePolicy`<sup>Optional</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.snapshotSchedulePolicy"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicy getSnapshotSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

snapshot_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#snapshot_schedule_policy GoogleComputeResourcePolicy#snapshot_schedule_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.timeouts"></a>

```java
public GoogleComputeResourcePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#timeouts GoogleComputeResourcePolicy#timeouts}

---

### GoogleComputeResourcePolicyDiskConsistencyGroupPolicy <a name="GoogleComputeResourcePolicyDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy;

GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable disk consistency on the resource policy. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable disk consistency on the resource policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#enabled GoogleComputeResourcePolicy#enabled}

---

### GoogleComputeResourcePolicyGroupPlacementPolicy <a name="GoogleComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyGroupPlacementPolicy;

GoogleComputeResourcePolicyGroupPlacementPolicy.builder()
//  .availabilityDomainCount(java.lang.Number)
//  .collocation(java.lang.String)
//  .maxDistance(java.lang.Number)
//  .vmCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>java.lang.Number</code> | The number of availability domains instances will be spread across. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.collocation">collocation</a></code> | <code>java.lang.String</code> | Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.maxDistance">maxDistance</a></code> | <code>java.lang.Number</code> | Specifies the number of max logical switches. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | Number of VMs in this placement group. |

---

##### `availabilityDomainCount`<sup>Optional</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount"></a>

```java
public java.lang.Number getAvailabilityDomainCount();
```

- *Type:* java.lang.Number

The number of availability domains instances will be spread across.

If two instances are in different
availability domain, they will not be put in the same low latency network

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#availability_domain_count GoogleComputeResourcePolicy#availability_domain_count}

---

##### `collocation`<sup>Optional</sup> <a name="collocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.collocation"></a>

```java
public java.lang.String getCollocation();
```

- *Type:* java.lang.String

Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.

Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
attached. Possible values: ["COLLOCATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#collocation GoogleComputeResourcePolicy#collocation}

---

##### `maxDistance`<sup>Optional</sup> <a name="maxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.maxDistance"></a>

```java
public java.lang.Number getMaxDistance();
```

- *Type:* java.lang.Number

Specifies the number of max logical switches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#max_distance GoogleComputeResourcePolicy#max_distance}

---

##### `vmCount`<sup>Optional</sup> <a name="vmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

Number of VMs in this placement group.

Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#vm_count GoogleComputeResourcePolicy#vm_count}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicy <a name="GoogleComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicy;

GoogleComputeResourcePolicyInstanceSchedulePolicy.builder()
    .timeZone(java.lang.String)
//  .expirationTime(java.lang.String)
//  .startTime(java.lang.String)
//  .vmStartSchedule(GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule)
//  .vmStopSchedule(GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Specifies the time zone to be used in interpreting the schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | The expiration time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | vm_start_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | vm_stop_schedule block. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Specifies the time zone to be used in interpreting the schedule.

The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#time_zone GoogleComputeResourcePolicy#time_zone}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

The expiration time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#expiration_time GoogleComputeResourcePolicy#expiration_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

##### `vmStartSchedule`<sup>Optional</sup> <a name="vmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule getVmStartSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

vm_start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#vm_start_schedule GoogleComputeResourcePolicy#vm_start_schedule}

---

##### `vmStopSchedule`<sup>Optional</sup> <a name="vmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule getVmStopSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

vm_stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#vm_stop_schedule GoogleComputeResourcePolicy#vm_stop_schedule}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;

GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.builder()
    .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;

GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.builder()
    .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicy <a name="GoogleComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicy;

GoogleComputeResourcePolicySnapshotSchedulePolicy.builder()
    .schedule(GoogleComputeResourcePolicySnapshotSchedulePolicySchedule)
//  .retentionPolicy(GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy)
//  .snapshotProperties(GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | snapshot_properties block. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.schedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#retention_policy GoogleComputeResourcePolicy#retention_policy}

---

##### `snapshotProperties`<sup>Optional</sup> <a name="snapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties getSnapshotProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

snapshot_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#snapshot_properties GoogleComputeResourcePolicy#snapshot_properties}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;

GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.builder()
    .maxRetentionDays(java.lang.Number)
//  .onSourceDiskDelete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays">maxRetentionDays</a></code> | <code>java.lang.Number</code> | Maximum age of the snapshot that is allowed to be kept. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>java.lang.String</code> | Specifies the behavior to apply to scheduled snapshots when the source disk is deleted. |

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays"></a>

```java
public java.lang.Number getMaxRetentionDays();
```

- *Type:* java.lang.Number

Maximum age of the snapshot that is allowed to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#max_retention_days GoogleComputeResourcePolicy#max_retention_days}

---

##### `onSourceDiskDelete`<sup>Optional</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete"></a>

```java
public java.lang.String getOnSourceDiskDelete();
```

- *Type:* java.lang.String

Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.

Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#on_source_disk_delete GoogleComputeResourcePolicy#on_source_disk_delete}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule;

GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.builder()
//  .dailySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule)
//  .hourlySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule)
//  .weeklySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#daily_schedule GoogleComputeResourcePolicy#daily_schedule}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#hourly_schedule GoogleComputeResourcePolicy#hourly_schedule}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#weekly_schedule GoogleComputeResourcePolicy#weekly_schedule}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;

GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.builder()
    .daysInCycle(java.lang.Number)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle">daysInCycle</a></code> | <code>java.lang.Number</code> | Defines a schedule with units measured in days. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. |

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle"></a>

```java
public java.lang.Number getDaysInCycle();
```

- *Type:* java.lang.Number

Defines a schedule with units measured in days.

The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#days_in_cycle GoogleComputeResourcePolicy#days_in_cycle}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00.

For example,
both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;

GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.builder()
    .hoursInCycle(java.lang.Number)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle">hoursInCycle</a></code> | <code>java.lang.Number</code> | The number of hours between snapshots. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Time within the window to start the operations. |

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle"></a>

```java
public java.lang.Number getHoursInCycle();
```

- *Type:* java.lang.Number

The number of hours between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#hours_in_cycle GoogleComputeResourcePolicy#hours_in_cycle}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Time within the window to start the operations.

It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT. eg: 21:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;

GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.builder()
    .dayOfWeeks(IResolvable)
    .dayOfWeeks(java.util.List<GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks">dayOfWeeks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>></code> | day_of_weeks block. |

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks"></a>

```java
public java.lang.Object getDayOfWeeks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>>

day_of_weeks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#day_of_weeks GoogleComputeResourcePolicy#day_of_weeks}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks;

GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.builder()
    .day(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day">day</a></code> | <code>java.lang.String</code> | The day of the week to create the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Time within the window to start the operations. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The day of the week to create the snapshot.

e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#day GoogleComputeResourcePolicy#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Time within the window to start the operations.

It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;

GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.builder()
//  .chainName(java.lang.String)
//  .guestFlush(java.lang.Boolean)
//  .guestFlush(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .storageLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName">chainName</a></code> | <code>java.lang.String</code> | Creates the new snapshot in the snapshot chain labeled with the specified name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush">guestFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to perform a 'guest aware' snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key-value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | Cloud Storage bucket location to store the auto snapshot (regional or multi-regional). |

---

##### `chainName`<sup>Optional</sup> <a name="chainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName"></a>

```java
public java.lang.String getChainName();
```

- *Type:* java.lang.String

Creates the new snapshot in the snapshot chain labeled with the specified name.

The chain name must be 1-63 characters long and comply
with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#chain_name GoogleComputeResourcePolicy#chain_name}

---

##### `guestFlush`<sup>Optional</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush"></a>

```java
public java.lang.Object getGuestFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to perform a 'guest aware' snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#guest_flush GoogleComputeResourcePolicy#guest_flush}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#labels GoogleComputeResourcePolicy#labels}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

Cloud Storage bucket location to store the auto snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#storage_locations GoogleComputeResourcePolicy#storage_locations}

---

### GoogleComputeResourcePolicyTimeouts <a name="GoogleComputeResourcePolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyTimeouts;

GoogleComputeResourcePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#create GoogleComputeResourcePolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#delete GoogleComputeResourcePolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#update GoogleComputeResourcePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#create GoogleComputeResourcePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#delete GoogleComputeResourcePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_resource_policy#update GoogleComputeResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference <a name="GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference;

new GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicyDiskConsistencyGroupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---


### GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference;

new GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount">resetAvailabilityDomainCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation">resetCollocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetMaxDistance">resetMaxDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount">resetVmCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomainCount` <a name="resetAvailabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount"></a>

```java
public void resetAvailabilityDomainCount()
```

##### `resetCollocation` <a name="resetCollocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation"></a>

```java
public void resetCollocation()
```

##### `resetMaxDistance` <a name="resetMaxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetMaxDistance"></a>

```java
public void resetMaxDistance()
```

##### `resetVmCount` <a name="resetVmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount"></a>

```java
public void resetVmCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput">availabilityDomainCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput">collocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistanceInput">maxDistanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput">vmCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">collocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance">maxDistance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainCountInput`<sup>Optional</sup> <a name="availabilityDomainCountInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput"></a>

```java
public java.lang.Number getAvailabilityDomainCountInput();
```

- *Type:* java.lang.Number

---

##### `collocationInput`<sup>Optional</sup> <a name="collocationInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput"></a>

```java
public java.lang.String getCollocationInput();
```

- *Type:* java.lang.String

---

##### `maxDistanceInput`<sup>Optional</sup> <a name="maxDistanceInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistanceInput"></a>

```java
public java.lang.Number getMaxDistanceInput();
```

- *Type:* java.lang.Number

---

##### `vmCountInput`<sup>Optional</sup> <a name="vmCountInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput"></a>

```java
public java.lang.Number getVmCountInput();
```

- *Type:* java.lang.Number

---

##### `availabilityDomainCount`<sup>Required</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```java
public java.lang.Number getAvailabilityDomainCount();
```

- *Type:* java.lang.Number

---

##### `collocation`<sup>Required</sup> <a name="collocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```java
public java.lang.String getCollocation();
```

- *Type:* java.lang.String

---

##### `maxDistance`<sup>Required</sup> <a name="maxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance"></a>

```java
public java.lang.Number getMaxDistance();
```

- *Type:* java.lang.Number

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicyGroupPlacementPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference;

new GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule">putVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule">putVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule">resetVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule">resetVmStopSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVmStartSchedule` <a name="putVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule"></a>

```java
public void putVmStartSchedule(GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `putVmStopSchedule` <a name="putVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule"></a>

```java
public void putVmStopSchedule(GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime"></a>

```java
public void resetExpirationTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetVmStartSchedule` <a name="resetVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule"></a>

```java
public void resetVmStartSchedule()
```

##### `resetVmStopSchedule` <a name="resetVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule"></a>

```java
public void resetVmStopSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput">vmStartScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput">vmStopScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vmStartSchedule`<sup>Required</sup> <a name="vmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference getVmStartSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a>

---

##### `vmStopSchedule`<sup>Required</sup> <a name="vmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference getVmStopSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput"></a>

```java
public java.lang.String getExpirationTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `vmStartScheduleInput`<sup>Optional</sup> <a name="vmStartScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule getVmStartScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `vmStopScheduleInput`<sup>Optional</sup> <a name="vmStopScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule getVmStopScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference;

new GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference;

new GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties">putSnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties">resetSnapshotProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule"></a>

```java
public void putSchedule(GoogleComputeResourcePolicySnapshotSchedulePolicySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `putSnapshotProperties` <a name="putSnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties"></a>

```java
public void putSnapshotProperties(GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetSnapshotProperties` <a name="resetSnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties"></a>

```java
public void resetSnapshotProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput">snapshotPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a>

---

##### `snapshotProperties`<sup>Required</sup> <a name="snapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference getSnapshotProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a>

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `snapshotPropertiesInput`<sup>Optional</sup> <a name="snapshotPropertiesInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties getSnapshotPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete">resetOnSourceDiskDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnSourceDiskDelete` <a name="resetOnSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete"></a>

```java
public void resetOnSourceDiskDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput">maxRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput">onSourceDiskDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">maxRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRetentionDaysInput`<sup>Optional</sup> <a name="maxRetentionDaysInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput"></a>

```java
public java.lang.Number getMaxRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `onSourceDiskDeleteInput`<sup>Optional</sup> <a name="onSourceDiskDeleteInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput"></a>

```java
public java.lang.String getOnSourceDiskDeleteInput();
```

- *Type:* java.lang.String

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```java
public java.lang.Number getMaxRetentionDays();
```

- *Type:* java.lang.Number

---

##### `onSourceDiskDelete`<sup>Required</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```java
public java.lang.String getOnSourceDiskDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput">daysInCycleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">daysInCycle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInCycleInput`<sup>Optional</sup> <a name="daysInCycleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput"></a>

```java
public java.lang.Number getDaysInCycleInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```java
public java.lang.Number getDaysInCycle();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput">hoursInCycleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">hoursInCycle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInCycleInput`<sup>Optional</sup> <a name="hoursInCycleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput"></a>

```java
public java.lang.Number getHoursInCycleInput();
```

- *Type:* java.lang.Number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```java
public java.lang.Number getHoursInCycle();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule"></a>

```java
public void putDailySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule"></a>

```java
public void putHourlySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule"></a>

```java
public void putWeeklySchedule(GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule"></a>

```java
public void resetDailySchedule()
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule"></a>

```java
public void resetHourlySchedule()
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule"></a>

```java
public void resetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule getDailyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule getHourlyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule getWeeklyScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks">putDayOfWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDayOfWeeks` <a name="putDayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks"></a>

```java
public void putDayOfWeeks(IResolvable OR java.util.List<GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">dayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput">dayOfWeeksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList getDayOfWeeks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `dayOfWeeksInput`<sup>Optional</sup> <a name="dayOfWeeksInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput"></a>

```java
public java.lang.Object getDayOfWeeksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference;

new GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName">resetChainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush">resetGuestFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations">resetStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChainName` <a name="resetChainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName"></a>

```java
public void resetChainName()
```

##### `resetGuestFlush` <a name="resetGuestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush"></a>

```java
public void resetGuestFlush()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetStorageLocations` <a name="resetStorageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations"></a>

```java
public void resetStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput">chainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput">guestFlushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput">storageLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">chainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chainNameInput`<sup>Optional</sup> <a name="chainNameInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput"></a>

```java
public java.lang.String getChainNameInput();
```

- *Type:* java.lang.String

---

##### `guestFlushInput`<sup>Optional</sup> <a name="guestFlushInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput"></a>

```java
public java.lang.Object getGuestFlushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storageLocationsInput`<sup>Optional</sup> <a name="storageLocationsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput"></a>

```java
public java.util.List<java.lang.String> getStorageLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```java
public java.lang.String getChainName();
```

- *Type:* java.lang.String

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```java
public java.lang.Object getGuestFlush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---


### GoogleComputeResourcePolicyTimeoutsOutputReference <a name="GoogleComputeResourcePolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_resource_policy.GoogleComputeResourcePolicyTimeoutsOutputReference;

new GoogleComputeResourcePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---



