# `googleEdgecontainerNodePool` Submodule <a name="`googleEdgecontainerNodePool` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerNodePool <a name="GoogleEdgecontainerNodePool" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool google_edgecontainer_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePool;

GoogleEdgecontainerNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodeCount(java.lang.Number)
    .nodeLocation(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localDiskEncryption(GoogleEdgecontainerNodePoolLocalDiskEncryption)
//  .machineFilter(java.lang.String)
//  .nodeConfig(GoogleEdgecontainerNodePoolNodeConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleEdgecontainerNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.localDiskEncryption">localDiskEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.machineFilter">machineFilter</a></code> | <code>java.lang.String</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#cluster GoogleEdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#location GoogleEdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#name GoogleEdgecontainerNodePool#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_count GoogleEdgecontainerNodePool#node_count}

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeLocation"></a>

- *Type:* java.lang.String

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_location GoogleEdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

##### `localDiskEncryption`<sup>Optional</sup> <a name="localDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.localDiskEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#local_disk_encryption GoogleEdgecontainerNodePool#local_disk_encryption}

---

##### `machineFilter`<sup>Optional</sup> <a name="machineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.machineFilter"></a>

- *Type:* java.lang.String

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#machine_filter GoogleEdgecontainerNodePool#machine_filter}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_config GoogleEdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#timeouts GoogleEdgecontainerNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption">putLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLocalDiskEncryption">resetLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetMachineFilter">resetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalDiskEncryption` <a name="putLocalDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption"></a>

```java
public void putLocalDiskEncryption(GoogleEdgecontainerNodePoolLocalDiskEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig"></a>

```java
public void putNodeConfig(GoogleEdgecontainerNodePoolNodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts"></a>

```java
public void putTimeouts(GoogleEdgecontainerNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocalDiskEncryption` <a name="resetLocalDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLocalDiskEncryption"></a>

```java
public void resetLocalDiskEncryption()
```

##### `resetMachineFilter` <a name="resetMachineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetMachineFilter"></a>

```java
public void resetMachineFilter()
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetNodeConfig"></a>

```java
public void resetNodeConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePool;

GoogleEdgecontainerNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePool;

GoogleEdgecontainerNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePool;

GoogleEdgecontainerNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePool;

GoogleEdgecontainerNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleEdgecontainerNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleEdgecontainerNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleEdgecontainerNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleEdgecontainerNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryption">localDiskEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference">GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference">GoogleEdgecontainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeVersion">nodeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference">GoogleEdgecontainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryptionInput">localDiskEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilterInput">machineFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocationInput">nodeLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilter">machineFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `localDiskEncryption`<sup>Required</sup> <a name="localDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryption"></a>

```java
public GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference getLocalDiskEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference">GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfig"></a>

```java
public GoogleEdgecontainerNodePoolNodeConfigOutputReference getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference">GoogleEdgecontainerNodePoolNodeConfigOutputReference</a>

---

##### `nodeVersion`<sup>Required</sup> <a name="nodeVersion" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeVersion"></a>

```java
public java.lang.String getNodeVersion();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeouts"></a>

```java
public GoogleEdgecontainerNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference">GoogleEdgecontainerNodePoolTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localDiskEncryptionInput`<sup>Optional</sup> <a name="localDiskEncryptionInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryptionInput"></a>

```java
public GoogleEdgecontainerNodePoolLocalDiskEncryption getLocalDiskEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `machineFilterInput`<sup>Optional</sup> <a name="machineFilterInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilterInput"></a>

```java
public java.lang.String getMachineFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfigInput"></a>

```java
public GoogleEdgecontainerNodePoolNodeConfig getNodeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nodeLocationInput`<sup>Optional</sup> <a name="nodeLocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocationInput"></a>

```java
public java.lang.String getNodeLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `machineFilter`<sup>Required</sup> <a name="machineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilter"></a>

```java
public java.lang.String getMachineFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerNodePoolConfig <a name="GoogleEdgecontainerNodePoolConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolConfig;

GoogleEdgecontainerNodePoolConfig.builder()
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodeCount(java.lang.Number)
    .nodeLocation(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localDiskEncryption(GoogleEdgecontainerNodePoolLocalDiskEncryption)
//  .machineFilter(java.lang.String)
//  .nodeConfig(GoogleEdgecontainerNodePoolNodeConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleEdgecontainerNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeLocation">nodeLocation</a></code> | <code>java.lang.String</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.localDiskEncryption">localDiskEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.machineFilter">machineFilter</a></code> | <code>java.lang.String</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#cluster GoogleEdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#location GoogleEdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#name GoogleEdgecontainerNodePool#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_count GoogleEdgecontainerNodePool#node_count}

---

##### `nodeLocation`<sup>Required</sup> <a name="nodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeLocation"></a>

```java
public java.lang.String getNodeLocation();
```

- *Type:* java.lang.String

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_location GoogleEdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

##### `localDiskEncryption`<sup>Optional</sup> <a name="localDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.localDiskEncryption"></a>

```java
public GoogleEdgecontainerNodePoolLocalDiskEncryption getLocalDiskEncryption();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#local_disk_encryption GoogleEdgecontainerNodePool#local_disk_encryption}

---

##### `machineFilter`<sup>Optional</sup> <a name="machineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.machineFilter"></a>

```java
public java.lang.String getMachineFilter();
```

- *Type:* java.lang.String

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#machine_filter GoogleEdgecontainerNodePool#machine_filter}

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeConfig"></a>

```java
public GoogleEdgecontainerNodePoolNodeConfig getNodeConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#node_config GoogleEdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.timeouts"></a>

```java
public GoogleEdgecontainerNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#timeouts GoogleEdgecontainerNodePool#timeouts}

---

### GoogleEdgecontainerNodePoolLocalDiskEncryption <a name="GoogleEdgecontainerNodePoolLocalDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolLocalDiskEncryption;

GoogleEdgecontainerNodePoolLocalDiskEncryption.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#kms_key GoogleEdgecontainerNodePool#kms_key}

---

### GoogleEdgecontainerNodePoolNodeConfig <a name="GoogleEdgecontainerNodePoolNodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolNodeConfig;

GoogleEdgecontainerNodePoolNodeConfig.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | "The Kubernetes node labels". |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

### GoogleEdgecontainerNodePoolTimeouts <a name="GoogleEdgecontainerNodePoolTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolTimeouts;

GoogleEdgecontainerNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#create GoogleEdgecontainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#delete GoogleEdgecontainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#update GoogleEdgecontainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#create GoogleEdgecontainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#delete GoogleEdgecontainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_edgecontainer_node_pool#update GoogleEdgecontainerNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference <a name="GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference;

new GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion">kmsKeyActiveVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyActiveVersion`<sup>Required</sup> <a name="kmsKeyActiveVersion" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```java
public java.lang.String getKmsKeyActiveVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState"></a>

```java
public java.lang.String getKmsKeyState();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerNodePoolLocalDiskEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

---


### GoogleEdgecontainerNodePoolNodeConfigOutputReference <a name="GoogleEdgecontainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolNodeConfigOutputReference;

new GoogleEdgecontainerNodePoolNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerNodePoolNodeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

---


### GoogleEdgecontainerNodePoolTimeoutsOutputReference <a name="GoogleEdgecontainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_node_pool.GoogleEdgecontainerNodePoolTimeoutsOutputReference;

new GoogleEdgecontainerNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

---



