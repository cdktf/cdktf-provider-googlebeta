# `googleComputeNodeGroup` Submodule <a name="`googleComputeNodeGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNodeGroup <a name="GoogleComputeNodeGroup" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroup;

GoogleComputeNodeGroup.Builder.create(Construct scope, java.lang.String id)
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
    .nodeTemplate(java.lang.String)
//  .autoscalingPolicy(GoogleComputeNodeGroupAutoscalingPolicy)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialSize(java.lang.Number)
//  .maintenanceInterval(java.lang.String)
//  .maintenancePolicy(java.lang.String)
//  .maintenanceWindow(GoogleComputeNodeGroupMaintenanceWindow)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .shareSettings(GoogleComputeNodeGroupShareSettings)
//  .timeouts(GoogleComputeNodeGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.nodeTemplate">nodeTemplate</a></code> | <code>java.lang.String</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.initialSize">initialSize</a></code> | <code>java.lang.Number</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency of planned maintenance events. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenancePolicy">maintenancePolicy</a></code> | <code>java.lang.String</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Zone where this node group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `nodeTemplate`<sup>Required</sup> <a name="nodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.nodeTemplate"></a>

- *Type:* java.lang.String

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#node_template GoogleComputeNodeGroup#node_template}

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#autoscaling_policy GoogleComputeNodeGroup#autoscaling_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#description GoogleComputeNodeGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSize`<sup>Optional</sup> <a name="initialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.initialSize"></a>

- *Type:* java.lang.Number

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#initial_size GoogleComputeNodeGroup#initial_size}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenanceInterval"></a>

- *Type:* java.lang.String

Specifies the frequency of planned maintenance events.

Set to one of the following:

* AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
* RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs. Possible values: ["AS_NEEDED", "RECURRENT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_interval GoogleComputeNodeGroup#maintenance_interval}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenancePolicy"></a>

- *Type:* java.lang.String

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_policy GoogleComputeNodeGroup#maintenance_policy}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_window GoogleComputeNodeGroup#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#name GoogleComputeNodeGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}.

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.shareSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#share_settings GoogleComputeNodeGroup#share_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#timeouts GoogleComputeNodeGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#zone GoogleComputeNodeGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings">putShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetAutoscalingPolicy">resetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetInitialSize">resetInitialSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceInterval">resetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetShareSettings">resetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy"></a>

```java
public void putAutoscalingPolicy(GoogleComputeNodeGroupAutoscalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleComputeNodeGroupMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---

##### `putShareSettings` <a name="putShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings"></a>

```java
public void putShareSettings(GoogleComputeNodeGroupShareSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNodeGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

---

##### `resetAutoscalingPolicy` <a name="resetAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetAutoscalingPolicy"></a>

```java
public void resetAutoscalingPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetId"></a>

```java
public void resetId()
```

##### `resetInitialSize` <a name="resetInitialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetInitialSize"></a>

```java
public void resetInitialSize()
```

##### `resetMaintenanceInterval` <a name="resetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceInterval"></a>

```java
public void resetMaintenanceInterval()
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenancePolicy"></a>

```java
public void resetMaintenancePolicy()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetShareSettings` <a name="resetShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetShareSettings"></a>

```java
public void resetShareSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroup;

GoogleComputeNodeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroup;

GoogleComputeNodeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroup;

GoogleComputeNodeGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroup;

GoogleComputeNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference">GoogleComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference">GoogleComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference">GoogleComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference">GoogleComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSizeInput">initialSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceIntervalInput">maintenanceIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplateInput">nodeTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettingsInput">shareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSize">initialSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicy">maintenancePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplate">nodeTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicy"></a>

```java
public GoogleComputeNodeGroupAutoscalingPolicyOutputReference getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference">GoogleComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindow"></a>

```java
public GoogleComputeNodeGroupMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference">GoogleComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `shareSettings`<sup>Required</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettings"></a>

```java
public GoogleComputeNodeGroupShareSettingsOutputReference getShareSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference">GoogleComputeNodeGroupShareSettingsOutputReference</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeouts"></a>

```java
public GoogleComputeNodeGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference">GoogleComputeNodeGroupTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicyInput"></a>

```java
public GoogleComputeNodeGroupAutoscalingPolicy getAutoscalingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialSizeInput`<sup>Optional</sup> <a name="initialSizeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSizeInput"></a>

```java
public java.lang.Number getInitialSizeInput();
```

- *Type:* java.lang.Number

---

##### `maintenanceIntervalInput`<sup>Optional</sup> <a name="maintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceIntervalInput"></a>

```java
public java.lang.String getMaintenanceIntervalInput();
```

- *Type:* java.lang.String

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicyInput"></a>

```java
public java.lang.String getMaintenancePolicyInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindowInput"></a>

```java
public GoogleComputeNodeGroupMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTemplateInput`<sup>Optional</sup> <a name="nodeTemplateInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplateInput"></a>

```java
public java.lang.String getNodeTemplateInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `shareSettingsInput`<sup>Optional</sup> <a name="shareSettingsInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettingsInput"></a>

```java
public GoogleComputeNodeGroupShareSettings getShareSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialSize`<sup>Required</sup> <a name="initialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSize"></a>

```java
public java.lang.Number getInitialSize();
```

- *Type:* java.lang.Number

---

##### `maintenanceInterval`<sup>Required</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicy"></a>

```java
public java.lang.String getMaintenancePolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeTemplate`<sup>Required</sup> <a name="nodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplate"></a>

```java
public java.lang.String getNodeTemplate();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNodeGroupAutoscalingPolicy <a name="GoogleComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupAutoscalingPolicy;

GoogleComputeNodeGroupAutoscalingPolicy.builder()
//  .maxNodes(java.lang.Number)
//  .minNodes(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | The autoscaling mode. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#max_nodes GoogleComputeNodeGroup#max_nodes}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#min_nodes GoogleComputeNodeGroup#min_nodes}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#mode GoogleComputeNodeGroup#mode}

---

### GoogleComputeNodeGroupConfig <a name="GoogleComputeNodeGroupConfig" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupConfig;

GoogleComputeNodeGroupConfig.builder()
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
    .nodeTemplate(java.lang.String)
//  .autoscalingPolicy(GoogleComputeNodeGroupAutoscalingPolicy)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .initialSize(java.lang.Number)
//  .maintenanceInterval(java.lang.String)
//  .maintenancePolicy(java.lang.String)
//  .maintenanceWindow(GoogleComputeNodeGroupMaintenanceWindow)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .shareSettings(GoogleComputeNodeGroupShareSettings)
//  .timeouts(GoogleComputeNodeGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.nodeTemplate">nodeTemplate</a></code> | <code>java.lang.String</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.initialSize">initialSize</a></code> | <code>java.lang.Number</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceInterval">maintenanceInterval</a></code> | <code>java.lang.String</code> | Specifies the frequency of planned maintenance events. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code>java.lang.String</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.shareSettings">shareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Zone where this node group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `nodeTemplate`<sup>Required</sup> <a name="nodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.nodeTemplate"></a>

```java
public java.lang.String getNodeTemplate();
```

- *Type:* java.lang.String

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#node_template GoogleComputeNodeGroup#node_template}

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```java
public GoogleComputeNodeGroupAutoscalingPolicy getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#autoscaling_policy GoogleComputeNodeGroup#autoscaling_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#description GoogleComputeNodeGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSize`<sup>Optional</sup> <a name="initialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.initialSize"></a>

```java
public java.lang.Number getInitialSize();
```

- *Type:* java.lang.Number

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#initial_size GoogleComputeNodeGroup#initial_size}

---

##### `maintenanceInterval`<sup>Optional</sup> <a name="maintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceInterval"></a>

```java
public java.lang.String getMaintenanceInterval();
```

- *Type:* java.lang.String

Specifies the frequency of planned maintenance events.

Set to one of the following:

* AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
* RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs. Possible values: ["AS_NEEDED", "RECURRENT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_interval GoogleComputeNodeGroup#maintenance_interval}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenancePolicy"></a>

```java
public java.lang.String getMaintenancePolicy();
```

- *Type:* java.lang.String

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_policy GoogleComputeNodeGroup#maintenance_policy}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceWindow"></a>

```java
public GoogleComputeNodeGroupMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#maintenance_window GoogleComputeNodeGroup#maintenance_window}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#name GoogleComputeNodeGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}.

---

##### `shareSettings`<sup>Optional</sup> <a name="shareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.shareSettings"></a>

```java
public GoogleComputeNodeGroupShareSettings getShareSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#share_settings GoogleComputeNodeGroup#share_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.timeouts"></a>

```java
public GoogleComputeNodeGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#timeouts GoogleComputeNodeGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#zone GoogleComputeNodeGroup#zone}

---

### GoogleComputeNodeGroupMaintenanceWindow <a name="GoogleComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupMaintenanceWindow;

GoogleComputeNodeGroupMaintenanceWindow.builder()
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.property.startTime">startTime</a></code> | <code>java.lang.String</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#start_time GoogleComputeNodeGroup#start_time}

---

### GoogleComputeNodeGroupShareSettings <a name="GoogleComputeNodeGroupShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupShareSettings;

GoogleComputeNodeGroupShareSettings.builder()
    .shareType(java.lang.String)
//  .projectMap(IResolvable)
//  .projectMap(java.util.List<GoogleComputeNodeGroupShareSettingsProjectMap>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.shareType">shareType</a></code> | <code>java.lang.String</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.projectMap">projectMap</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>></code> | project_map block. |

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#share_type GoogleComputeNodeGroup#share_type}

---

##### `projectMap`<sup>Optional</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.projectMap"></a>

```java
public java.lang.Object getProjectMap();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>>

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project_map GoogleComputeNodeGroup#project_map}

---

### GoogleComputeNodeGroupShareSettingsProjectMap <a name="GoogleComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupShareSettingsProjectMap;

GoogleComputeNodeGroupShareSettingsProjectMap.builder()
    .id(java.lang.String)
    .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#project_id GoogleComputeNodeGroup#project_id}

---

### GoogleComputeNodeGroupTimeouts <a name="GoogleComputeNodeGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupTimeouts;

GoogleComputeNodeGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#create GoogleComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#delete GoogleComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#update GoogleComputeNodeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#create GoogleComputeNodeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#delete GoogleComputeNodeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_compute_node_group#update GoogleComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNodeGroupAutoscalingPolicyOutputReference <a name="GoogleComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupAutoscalingPolicyOutputReference;

new GoogleComputeNodeGroupAutoscalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```java
public void resetMaxNodes()
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```java
public void resetMinNodes()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeNodeGroupAutoscalingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---


### GoogleComputeNodeGroupMaintenanceWindowOutputReference <a name="GoogleComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupMaintenanceWindowOutputReference;

new GoogleComputeNodeGroupMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleComputeNodeGroupMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---


### GoogleComputeNodeGroupShareSettingsOutputReference <a name="GoogleComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupShareSettingsOutputReference;

new GoogleComputeNodeGroupShareSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap">putProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resetProjectMap">resetProjectMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProjectMap` <a name="putProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```java
public void putProjectMap(IResolvable OR java.util.List<GoogleComputeNodeGroupShareSettingsProjectMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>>

---

##### `resetProjectMap` <a name="resetProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```java
public void resetProjectMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMap">projectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList">GoogleComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">projectMapInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareType">shareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectMap`<sup>Required</sup> <a name="projectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```java
public GoogleComputeNodeGroupShareSettingsProjectMapList getProjectMap();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList">GoogleComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `projectMapInput`<sup>Optional</sup> <a name="projectMapInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```java
public java.lang.Object getProjectMapInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>>

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```java
public java.lang.String getShareTypeInput();
```

- *Type:* java.lang.String

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```java
public GoogleComputeNodeGroupShareSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---


### GoogleComputeNodeGroupShareSettingsProjectMapList <a name="GoogleComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupShareSettingsProjectMapList;

new GoogleComputeNodeGroupShareSettingsProjectMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get"></a>

```java
public GoogleComputeNodeGroupShareSettingsProjectMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>>

---


### GoogleComputeNodeGroupShareSettingsProjectMapOutputReference <a name="GoogleComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference;

new GoogleComputeNodeGroupShareSettingsProjectMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap">GoogleComputeNodeGroupShareSettingsProjectMap</a>

---


### GoogleComputeNodeGroupTimeoutsOutputReference <a name="GoogleComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_node_group.GoogleComputeNodeGroupTimeoutsOutputReference;

new GoogleComputeNodeGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

---



