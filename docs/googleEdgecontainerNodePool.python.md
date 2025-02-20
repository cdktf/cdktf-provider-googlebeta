# `googleEdgecontainerNodePool` Submodule <a name="`googleEdgecontainerNodePool` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerNodePool <a name="GoogleEdgecontainerNodePool" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool google_edgecontainer_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  node_count: typing.Union[int, float],
  node_location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  local_disk_encryption: GoogleEdgecontainerNodePoolLocalDiskEncryption = None,
  machine_filter: str = None,
  node_config: GoogleEdgecontainerNodePoolNodeConfig = None,
  project: str = None,
  timeouts: GoogleEdgecontainerNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.machineFilter">machine_filter</a></code> | <code>str</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#cluster GoogleEdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#location GoogleEdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#name GoogleEdgecontainerNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_count GoogleEdgecontainerNodePool#node_count}

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeLocation"></a>

- *Type:* str

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_location GoogleEdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

##### `local_disk_encryption`<sup>Optional</sup> <a name="local_disk_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.localDiskEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#local_disk_encryption GoogleEdgecontainerNodePool#local_disk_encryption}

---

##### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.machineFilter"></a>

- *Type:* str

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#machine_filter GoogleEdgecontainerNodePool#machine_filter}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_config GoogleEdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#timeouts GoogleEdgecontainerNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption">put_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLocalDiskEncryption">reset_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetMachineFilter">reset_machine_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_local_disk_encryption` <a name="put_local_disk_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption"></a>

```python
def put_local_disk_encryption(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putLocalDiskEncryption.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#kms_key GoogleEdgecontainerNodePool#kms_key}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig"></a>

```python
def put_node_config(
  labels: typing.Mapping[str] = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putNodeConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#create GoogleEdgecontainerNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#delete GoogleEdgecontainerNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#update GoogleEdgecontainerNodePool#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_local_disk_encryption` <a name="reset_local_disk_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetLocalDiskEncryption"></a>

```python
def reset_local_disk_encryption() -> None
```

##### `reset_machine_filter` <a name="reset_machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetMachineFilter"></a>

```python
def reset_machine_filter() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEdgecontainerNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEdgecontainerNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEdgecontainerNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference">GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference">GoogleEdgecontainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeVersion">node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference">GoogleEdgecontainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryptionInput">local_disk_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilterInput">machine_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocationInput">node_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilter">machine_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocation">node_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `local_disk_encryption`<sup>Required</sup> <a name="local_disk_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryption"></a>

```python
local_disk_encryption: GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference">GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfig"></a>

```python
node_config: GoogleEdgecontainerNodePoolNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference">GoogleEdgecontainerNodePoolNodeConfigOutputReference</a>

---

##### `node_version`<sup>Required</sup> <a name="node_version" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeouts"></a>

```python
timeouts: GoogleEdgecontainerNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference">GoogleEdgecontainerNodePoolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_disk_encryption_input`<sup>Optional</sup> <a name="local_disk_encryption_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.localDiskEncryptionInput"></a>

```python
local_disk_encryption_input: GoogleEdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_filter_input`<sup>Optional</sup> <a name="machine_filter_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilterInput"></a>

```python
machine_filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeConfigInput"></a>

```python
node_config_input: GoogleEdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location_input`<sup>Optional</sup> <a name="node_location_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocationInput"></a>

```python
node_location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEdgecontainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_filter`<sup>Required</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerNodePoolConfig <a name="GoogleEdgecontainerNodePoolConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  node_count: typing.Union[int, float],
  node_location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  local_disk_encryption: GoogleEdgecontainerNodePoolLocalDiskEncryption = None,
  machine_filter: str = None,
  node_config: GoogleEdgecontainerNodePoolNodeConfig = None,
  project: str = None,
  timeouts: GoogleEdgecontainerNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.name">name</a></code> | <code>str</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.machineFilter">machine_filter</a></code> | <code>str</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#cluster GoogleEdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#location GoogleEdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#name GoogleEdgecontainerNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_count GoogleEdgecontainerNodePool#node_count}

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_location GoogleEdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#id GoogleEdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

##### `local_disk_encryption`<sup>Optional</sup> <a name="local_disk_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.localDiskEncryption"></a>

```python
local_disk_encryption: GoogleEdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#local_disk_encryption GoogleEdgecontainerNodePool#local_disk_encryption}

---

##### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#machine_filter GoogleEdgecontainerNodePool#machine_filter}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.nodeConfig"></a>

```python
node_config: GoogleEdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#node_config GoogleEdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#project GoogleEdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleEdgecontainerNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#timeouts GoogleEdgecontainerNodePool#timeouts}

---

### GoogleEdgecontainerNodePoolLocalDiskEncryption <a name="GoogleEdgecontainerNodePoolLocalDiskEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#kms_key GoogleEdgecontainerNodePool#kms_key}

---

### GoogleEdgecontainerNodePoolNodeConfig <a name="GoogleEdgecontainerNodePoolNodeConfig" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig(
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | "The Kubernetes node labels". |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#labels GoogleEdgecontainerNodePool#labels}

---

### GoogleEdgecontainerNodePoolTimeouts <a name="GoogleEdgecontainerNodePoolTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#create GoogleEdgecontainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#delete GoogleEdgecontainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#update GoogleEdgecontainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#create GoogleEdgecontainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#delete GoogleEdgecontainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_edgecontainer_node_pool#update GoogleEdgecontainerNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference <a name="GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion">kms_key_active_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState">kms_key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_active_version`<sup>Required</sup> <a name="kms_key_active_version" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```python
kms_key_active_version: str
```

- *Type:* str

---

##### `kms_key_state`<sup>Required</sup> <a name="kms_key_state" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState"></a>

```python
kms_key_state: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolLocalDiskEncryption">GoogleEdgecontainerNodePoolLocalDiskEncryption</a>

---


### GoogleEdgecontainerNodePoolNodeConfigOutputReference <a name="GoogleEdgecontainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolNodeConfig">GoogleEdgecontainerNodePoolNodeConfig</a>

---


### GoogleEdgecontainerNodePoolTimeoutsOutputReference <a name="GoogleEdgecontainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_node_pool

googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEdgecontainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerNodePool.GoogleEdgecontainerNodePoolTimeouts">GoogleEdgecontainerNodePoolTimeouts</a>]

---



