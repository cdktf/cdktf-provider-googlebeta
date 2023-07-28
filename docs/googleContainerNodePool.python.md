# `google_container_node_pool`

Refer to the Terraform Registory for docs: [`google_container_node_pool`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool).

# `googleContainerNodePool` Submodule <a name="`googleContainerNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerNodePool <a name="GoogleContainerNodePool" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool google_container_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePool(
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
  autoscaling: GoogleContainerNodePoolAutoscaling = None,
  id: str = None,
  initial_node_count: typing.Union[int, float] = None,
  location: str = None,
  management: GoogleContainerNodePoolManagement = None,
  max_pods_per_node: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  network_config: GoogleContainerNodePoolNetworkConfig = None,
  node_config: GoogleContainerNodePoolNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  node_locations: typing.List[str] = None,
  placement_policy: GoogleContainerNodePoolPlacementPolicy = None,
  project: str = None,
  timeouts: GoogleContainerNodePoolTimeouts = None,
  upgrade_settings: GoogleContainerNodePoolUpgradeSettings = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.version">version</a></code> | <code>str</code> | The Kubernetes version for the nodes in this pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cluster GoogleContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#autoscaling GoogleContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_count`<sup>Optional</sup> <a name="initial_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.initialNodeCount"></a>

- *Type:* typing.Union[int, float]

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#initial_node_count GoogleContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#location GoogleContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#management GoogleContainerNodePool#management}

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_pods_per_node GoogleContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.name"></a>

- *Type:* str

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#name GoogleContainerNodePool#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.namePrefix"></a>

- *Type:* str

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#name_prefix GoogleContainerNodePool#name_prefix}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#network_config GoogleContainerNodePool#network_config}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_config GoogleContainerNodePool#node_config}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_count GoogleContainerNodePool#node_count}

---

##### `node_locations`<sup>Optional</sup> <a name="node_locations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.nodeLocations"></a>

- *Type:* typing.List[str]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_locations GoogleContainerNodePool#node_locations}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.placementPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#placement_policy GoogleContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#project GoogleContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#timeouts GoogleContainerNodePool#timeouts}

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.upgradeSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#upgrade_settings GoogleContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.Initializer.parameter.version"></a>

- *Type:* str

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#version GoogleContainerNodePool#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling">put_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement">put_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy">put_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings">put_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetAutoscaling">reset_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetInitialNodeCount">reset_initial_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetMaxPodsPerNode">reset_max_pods_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeLocations">reset_node_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetPlacementPolicy">reset_placement_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetUpgradeSettings">reset_upgrade_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_autoscaling` <a name="put_autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling"></a>

```python
def put_autoscaling(
  location_policy: str = None,
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  total_max_node_count: typing.Union[int, float] = None,
  total_min_node_count: typing.Union[int, float] = None
) -> None
```

###### `location_policy`<sup>Optional</sup> <a name="location_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.locationPolicy"></a>

- *Type:* str

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#location_policy GoogleContainerNodePool#location_policy}

---

###### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_node_count GoogleContainerNodePool#max_node_count}

---

###### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#min_node_count GoogleContainerNodePool#min_node_count}

---

###### `total_max_node_count`<sup>Optional</sup> <a name="total_max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.totalMaxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#total_max_node_count GoogleContainerNodePool#total_max_node_count}

---

###### `total_min_node_count`<sup>Optional</sup> <a name="total_min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putAutoscaling.parameter.totalMinNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#total_min_node_count GoogleContainerNodePool#total_min_node_count}

---

##### `put_management` <a name="put_management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement"></a>

```python
def put_management(
  auto_repair: typing.Union[bool, IResolvable] = None,
  auto_upgrade: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement.parameter.autoRepair"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#auto_repair GoogleContainerNodePool#auto_repair}

---

###### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putManagement.parameter.autoUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#auto_upgrade GoogleContainerNodePool#auto_upgrade}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig"></a>

```python
def put_network_config(
  create_pod_range: typing.Union[bool, IResolvable] = None,
  enable_private_nodes: typing.Union[bool, IResolvable] = None,
  pod_cidr_overprovision_config: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig = None,
  pod_ipv4_cidr_block: str = None,
  pod_range: str = None
) -> None
```

###### `create_pod_range`<sup>Optional</sup> <a name="create_pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.createPodRange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#create_pod_range GoogleContainerNodePool#create_pod_range}

---

###### `enable_private_nodes`<sup>Optional</sup> <a name="enable_private_nodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.enablePrivateNodes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_private_nodes GoogleContainerNodePool#enable_private_nodes}

---

###### `pod_cidr_overprovision_config`<sup>Optional</sup> <a name="pod_cidr_overprovision_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.podCidrOverprovisionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

pod_cidr_overprovision_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_cidr_overprovision_config GoogleContainerNodePool#pod_cidr_overprovision_config}

---

###### `pod_ipv4_cidr_block`<sup>Optional</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.podIpv4CidrBlock"></a>

- *Type:* str

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_ipv4_cidr_block GoogleContainerNodePool#pod_ipv4_cidr_block}

---

###### `pod_range`<sup>Optional</sup> <a name="pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNetworkConfig.parameter.podRange"></a>

- *Type:* str

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_range GoogleContainerNodePool#pod_range}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig"></a>

```python
def put_node_config(
  advanced_machine_features: GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures = None,
  boot_disk_kms_key: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  ephemeral_storage_config: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig = None,
  ephemeral_storage_local_ssd_config: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig = None,
  gcfs_config: GoogleContainerNodePoolNodeConfigGcfsConfig = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]] = None,
  gvnic: GoogleContainerNodePoolNodeConfigGvnic = None,
  image_type: str = None,
  kubelet_config: GoogleContainerNodePoolNodeConfigKubeletConfig = None,
  labels: typing.Mapping[str] = None,
  linux_node_config: GoogleContainerNodePoolNodeConfigLinuxNodeConfig = None,
  local_nvme_ssd_block_config: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig = None,
  local_ssd_count: typing.Union[int, float] = None,
  logging_variant: str = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  min_cpu_platform: str = None,
  node_group: str = None,
  oauth_scopes: typing.List[str] = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  reservation_affinity: GoogleContainerNodePoolNodeConfigReservationAffinity = None,
  resource_labels: typing.Mapping[str] = None,
  sandbox_config: GoogleContainerNodePoolNodeConfigSandboxConfig = None,
  service_account: str = None,
  shielded_instance_config: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig = None,
  sole_tenant_config: GoogleContainerNodePoolNodeConfigSoleTenantConfig = None,
  spot: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  taint: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]] = None,
  workload_metadata_config: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig = None
) -> None
```

###### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.advancedMachineFeatures"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#advanced_machine_features GoogleContainerNodePool#advanced_machine_features}

---

###### `boot_disk_kms_key`<sup>Optional</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.bootDiskKmsKey"></a>

- *Type:* str

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#boot_disk_kms_key GoogleContainerNodePool#boot_disk_kms_key}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disk_size_gb GoogleContainerNodePool#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.diskType"></a>

- *Type:* str

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disk_type GoogleContainerNodePool#disk_type}

---

###### `ephemeral_storage_config`<sup>Optional</sup> <a name="ephemeral_storage_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.ephemeralStorageConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

ephemeral_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#ephemeral_storage_config GoogleContainerNodePool#ephemeral_storage_config}

---

###### `ephemeral_storage_local_ssd_config`<sup>Optional</sup> <a name="ephemeral_storage_local_ssd_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.ephemeralStorageLocalSsdConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

ephemeral_storage_local_ssd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#ephemeral_storage_local_ssd_config GoogleContainerNodePool#ephemeral_storage_local_ssd_config}

---

###### `gcfs_config`<sup>Optional</sup> <a name="gcfs_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.gcfsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gcfs_config GoogleContainerNodePool#gcfs_config}

---

###### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.guestAccelerator"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#guest_accelerator GoogleContainerNodePool#guest_accelerator}

---

###### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.gvnic"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gvnic GoogleContainerNodePool#gvnic}

---

###### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.imageType"></a>

- *Type:* str

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#image_type GoogleContainerNodePool#image_type}

---

###### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.kubeletConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#kubelet_config GoogleContainerNodePool#kubelet_config}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#labels GoogleContainerNodePool#labels}

---

###### `linux_node_config`<sup>Optional</sup> <a name="linux_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.linuxNodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#linux_node_config GoogleContainerNodePool#linux_node_config}

---

###### `local_nvme_ssd_block_config`<sup>Optional</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.localNvmeSsdBlockConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_nvme_ssd_block_config GoogleContainerNodePool#local_nvme_ssd_block_config}

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

###### `logging_variant`<sup>Optional</sup> <a name="logging_variant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.loggingVariant"></a>

- *Type:* str

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#logging_variant GoogleContainerNodePool#logging_variant}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.machineType"></a>

- *Type:* str

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#machine_type GoogleContainerNodePool#machine_type}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#metadata GoogleContainerNodePool#metadata}

---

###### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.minCpuPlatform"></a>

- *Type:* str

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#min_cpu_platform GoogleContainerNodePool#min_cpu_platform}

---

###### `node_group`<sup>Optional</sup> <a name="node_group" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.nodeGroup"></a>

- *Type:* str

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_group GoogleContainerNodePool#node_group}

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#oauth_scopes GoogleContainerNodePool#oauth_scopes}

---

###### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.preemptible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#preemptible GoogleContainerNodePool#preemptible}

---

###### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#reservation_affinity GoogleContainerNodePool#reservation_affinity}

---

###### `resource_labels`<sup>Optional</sup> <a name="resource_labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.resourceLabels"></a>

- *Type:* typing.Mapping[str]

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#resource_labels GoogleContainerNodePool#resource_labels}

---

###### `sandbox_config`<sup>Optional</sup> <a name="sandbox_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.sandboxConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

sandbox_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sandbox_config GoogleContainerNodePool#sandbox_config}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.serviceAccount"></a>

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#service_account GoogleContainerNodePool#service_account}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#shielded_instance_config GoogleContainerNodePool#shielded_instance_config}

---

###### `sole_tenant_config`<sup>Optional</sup> <a name="sole_tenant_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.soleTenantConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a>

sole_tenant_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sole_tenant_config GoogleContainerNodePool#sole_tenant_config}

---

###### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.spot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#spot GoogleContainerNodePool#spot}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.tags"></a>

- *Type:* typing.List[str]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#tags GoogleContainerNodePool#tags}

---

###### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.taint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#taint GoogleContainerNodePool#taint}

---

###### `workload_metadata_config`<sup>Optional</sup> <a name="workload_metadata_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putNodeConfig.parameter.workloadMetadataConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#workload_metadata_config GoogleContainerNodePool#workload_metadata_config}

---

##### `put_placement_policy` <a name="put_placement_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy"></a>

```python
def put_placement_policy(
  type: str,
  tpu_topology: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy.parameter.type"></a>

- *Type:* str

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}

---

###### `tpu_topology`<sup>Optional</sup> <a name="tpu_topology" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putPlacementPolicy.parameter.tpuTopology"></a>

- *Type:* str

TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#tpu_topology GoogleContainerNodePool#tpu_topology}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#create GoogleContainerNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#delete GoogleContainerNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#update GoogleContainerNodePool#update}.

---

##### `put_upgrade_settings` <a name="put_upgrade_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings"></a>

```python
def put_upgrade_settings(
  blue_green_settings: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings = None,
  max_surge: typing.Union[int, float] = None,
  max_unavailable: typing.Union[int, float] = None,
  strategy: str = None
) -> None
```

###### `blue_green_settings`<sup>Optional</sup> <a name="blue_green_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings.parameter.blueGreenSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#blue_green_settings GoogleContainerNodePool#blue_green_settings}

---

###### `max_surge`<sup>Optional</sup> <a name="max_surge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings.parameter.maxSurge"></a>

- *Type:* typing.Union[int, float]

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_surge GoogleContainerNodePool#max_surge}

---

###### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings.parameter.maxUnavailable"></a>

- *Type:* typing.Union[int, float]

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_unavailable GoogleContainerNodePool#max_unavailable}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.putUpgradeSettings.parameter.strategy"></a>

- *Type:* str

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#strategy GoogleContainerNodePool#strategy}

---

##### `reset_autoscaling` <a name="reset_autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetAutoscaling"></a>

```python
def reset_autoscaling() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_node_count` <a name="reset_initial_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetInitialNodeCount"></a>

```python
def reset_initial_node_count() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_max_pods_per_node` <a name="reset_max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetMaxPodsPerNode"></a>

```python
def reset_max_pods_per_node() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_node_locations` <a name="reset_node_locations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetNodeLocations"></a>

```python
def reset_node_locations() -> None
```

##### `reset_placement_policy` <a name="reset_placement_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetPlacementPolicy"></a>

```python
def reset_placement_policy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_upgrade_settings` <a name="reset_upgrade_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetUpgradeSettings"></a>

```python
def reset_upgrade_settings() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference">GoogleContainerNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.instanceGroupUrls">instance_group_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managedInstanceGroupUrls">managed_instance_group_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference">GoogleContainerNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference">GoogleContainerNodePoolNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference">GoogleContainerNodePoolPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference">GoogleContainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscalingInput">autoscaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCountInput">initial_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managementInput">management_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocationsInput">node_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicyInput">placement_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettingsInput">upgrade_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscaling"></a>

```python
autoscaling: GoogleContainerNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference">GoogleContainerNodePoolAutoscalingOutputReference</a>

---

##### `instance_group_urls`<sup>Required</sup> <a name="instance_group_urls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.instanceGroupUrls"></a>

```python
instance_group_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instance_group_urls`<sup>Required</sup> <a name="managed_instance_group_urls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managedInstanceGroupUrls"></a>

```python
managed_instance_group_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.management"></a>

```python
management: GoogleContainerNodePoolManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference">GoogleContainerNodePoolManagementOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfig"></a>

```python
network_config: GoogleContainerNodePoolNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference">GoogleContainerNodePoolNetworkConfigOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfig"></a>

```python
node_config: GoogleContainerNodePoolNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigOutputReference</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `placement_policy`<sup>Required</sup> <a name="placement_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicy"></a>

```python
placement_policy: GoogleContainerNodePoolPlacementPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference">GoogleContainerNodePoolPlacementPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeouts"></a>

```python
timeouts: GoogleContainerNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference">GoogleContainerNodePoolTimeoutsOutputReference</a>

---

##### `upgrade_settings`<sup>Required</sup> <a name="upgrade_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettings"></a>

```python
upgrade_settings: GoogleContainerNodePoolUpgradeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsOutputReference</a>

---

##### `autoscaling_input`<sup>Optional</sup> <a name="autoscaling_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.autoscalingInput"></a>

```python
autoscaling_input: GoogleContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_node_count_input`<sup>Optional</sup> <a name="initial_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCountInput"></a>

```python
initial_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.managementInput"></a>

```python
management_input: GoogleContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.networkConfigInput"></a>

```python
network_config_input: GoogleContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeConfigInput"></a>

```python
node_config_input: GoogleContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_locations_input`<sup>Optional</sup> <a name="node_locations_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocationsInput"></a>

```python
node_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_policy_input`<sup>Optional</sup> <a name="placement_policy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.placementPolicyInput"></a>

```python
placement_policy_input: GoogleContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>]

---

##### `upgrade_settings_input`<sup>Optional</sup> <a name="upgrade_settings_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.upgradeSettingsInput"></a>

```python
upgrade_settings_input: GoogleContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_node_count`<sup>Required</sup> <a name="initial_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_locations`<sup>Required</sup> <a name="node_locations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.nodeLocations"></a>

```python
node_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerNodePoolAutoscaling <a name="GoogleContainerNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolAutoscaling(
  location_policy: str = None,
  max_node_count: typing.Union[int, float] = None,
  min_node_count: typing.Union[int, float] = None,
  total_max_node_count: typing.Union[int, float] = None,
  total_min_node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.locationPolicy">location_policy</a></code> | <code>str</code> | Location policy specifies the algorithm used when scaling-up the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes per zone in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMaxNodeCount">total_max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of all nodes in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMinNodeCount">total_min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of all nodes in the node pool. |

---

##### `location_policy`<sup>Optional</sup> <a name="location_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.locationPolicy"></a>

```python
location_policy: str
```

- *Type:* str

Location policy specifies the algorithm used when scaling-up the node pool.

"BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#location_policy GoogleContainerNodePool#location_policy}

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes per zone in the node pool.

Must be >= min_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_node_count GoogleContainerNodePool#max_node_count}

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes per zone in the node pool.

Must be >=0 and <= max_node_count. Cannot be used with total limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#min_node_count GoogleContainerNodePool#min_node_count}

---

##### `total_max_node_count`<sup>Optional</sup> <a name="total_max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMaxNodeCount"></a>

```python
total_max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of all nodes in the node pool.

Must be >= total_min_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#total_max_node_count GoogleContainerNodePool#total_max_node_count}

---

##### `total_min_node_count`<sup>Optional</sup> <a name="total_min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling.property.totalMinNodeCount"></a>

```python
total_min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of all nodes in the node pool.

Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#total_min_node_count GoogleContainerNodePool#total_min_node_count}

---

### GoogleContainerNodePoolConfig <a name="GoogleContainerNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  autoscaling: GoogleContainerNodePoolAutoscaling = None,
  id: str = None,
  initial_node_count: typing.Union[int, float] = None,
  location: str = None,
  management: GoogleContainerNodePoolManagement = None,
  max_pods_per_node: typing.Union[int, float] = None,
  name: str = None,
  name_prefix: str = None,
  network_config: GoogleContainerNodePoolNetworkConfig = None,
  node_config: GoogleContainerNodePoolNodeConfig = None,
  node_count: typing.Union[int, float] = None,
  node_locations: typing.List[str] = None,
  placement_policy: GoogleContainerNodePoolPlacementPolicy = None,
  project: str = None,
  timeouts: GoogleContainerNodePoolTimeouts = None,
  upgrade_settings: GoogleContainerNodePoolUpgradeSettings = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.initialNodeCount">initial_node_count</a></code> | <code>typing.Union[int, float]</code> | The initial number of nodes for the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location (region or zone) of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods per node in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.name">name</a></code> | <code>str</code> | The name of the node pool. If left blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes per instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeLocations">node_locations</a></code> | <code>typing.List[str]</code> | The list of zones in which the node pool's nodes should be located. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.placementPolicy">placement_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which to create the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.upgradeSettings">upgrade_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | upgrade_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.version">version</a></code> | <code>str</code> | The Kubernetes version for the nodes in this pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cluster GoogleContainerNodePool#cluster}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.autoscaling"></a>

```python
autoscaling: GoogleContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#autoscaling GoogleContainerNodePool#autoscaling}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#id GoogleContainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_node_count`<sup>Optional</sup> <a name="initial_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.initialNodeCount"></a>

```python
initial_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial number of nodes for the pool.

In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#initial_node_count GoogleContainerNodePool#initial_node_count}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location (region or zone) of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#location GoogleContainerNodePool#location}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.management"></a>

```python
management: GoogleContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#management GoogleContainerNodePool#management}

---

##### `max_pods_per_node`<sup>Optional</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pods per node in this node pool.

Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_pods_per_node GoogleContainerNodePool#max_pods_per_node}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the node pool. If left blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#name GoogleContainerNodePool#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#name_prefix GoogleContainerNodePool#name_prefix}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.networkConfig"></a>

```python
network_config: GoogleContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#network_config GoogleContainerNodePool#network_config}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeConfig"></a>

```python
node_config: GoogleContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_config GoogleContainerNodePool#node_config}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes per instance group.

This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_count GoogleContainerNodePool#node_count}

---

##### `node_locations`<sup>Optional</sup> <a name="node_locations" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.nodeLocations"></a>

```python
node_locations: typing.List[str]
```

- *Type:* typing.List[str]

The list of zones in which the node pool's nodes should be located.

Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_locations GoogleContainerNodePool#node_locations}

---

##### `placement_policy`<sup>Optional</sup> <a name="placement_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.placementPolicy"></a>

```python
placement_policy: GoogleContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#placement_policy GoogleContainerNodePool#placement_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which to create the node pool.

If blank, the provider-configured project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#project GoogleContainerNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#timeouts GoogleContainerNodePool#timeouts}

---

##### `upgrade_settings`<sup>Optional</sup> <a name="upgrade_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.upgradeSettings"></a>

```python
upgrade_settings: GoogleContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

upgrade_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#upgrade_settings GoogleContainerNodePool#upgrade_settings}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version for the nodes in this pool.

Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#version GoogleContainerNodePool#version}

---

### GoogleContainerNodePoolManagement <a name="GoogleContainerNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolManagement(
  auto_repair: typing.Union[bool, IResolvable] = None,
  auto_upgrade: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes will be automatically repaired. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes will be automatically upgraded. |

---

##### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#auto_repair GoogleContainerNodePool#auto_repair}

---

##### `auto_upgrade`<sup>Optional</sup> <a name="auto_upgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes will be automatically upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#auto_upgrade GoogleContainerNodePool#auto_upgrade}

---

### GoogleContainerNodePoolNetworkConfig <a name="GoogleContainerNodePoolNetworkConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNetworkConfig(
  create_pod_range: typing.Union[bool, IResolvable] = None,
  enable_private_nodes: typing.Union[bool, IResolvable] = None,
  pod_cidr_overprovision_config: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig = None,
  pod_ipv4_cidr_block: str = None,
  pod_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.createPodRange">create_pod_range</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to create a new range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.enablePrivateNodes">enable_private_nodes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether nodes have internal IP addresses only. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig">pod_cidr_overprovision_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | pod_cidr_overprovision_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podIpv4CidrBlock">pod_ipv4_cidr_block</a></code> | <code>str</code> | The IP address range for pod IPs in this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podRange">pod_range</a></code> | <code>str</code> | The ID of the secondary range for pod IPs. |

---

##### `create_pod_range`<sup>Optional</sup> <a name="create_pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.createPodRange"></a>

```python
create_pod_range: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new range for pod IPs in this node pool.

Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#create_pod_range GoogleContainerNodePool#create_pod_range}

---

##### `enable_private_nodes`<sup>Optional</sup> <a name="enable_private_nodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.enablePrivateNodes"></a>

```python
enable_private_nodes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether nodes have internal IP addresses only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_private_nodes GoogleContainerNodePool#enable_private_nodes}

---

##### `pod_cidr_overprovision_config`<sup>Optional</sup> <a name="pod_cidr_overprovision_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podCidrOverprovisionConfig"></a>

```python
pod_cidr_overprovision_config: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

pod_cidr_overprovision_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_cidr_overprovision_config GoogleContainerNodePool#pod_cidr_overprovision_config}

---

##### `pod_ipv4_cidr_block`<sup>Optional</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podIpv4CidrBlock"></a>

```python
pod_ipv4_cidr_block: str
```

- *Type:* str

The IP address range for pod IPs in this node pool.

Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_ipv4_cidr_block GoogleContainerNodePool#pod_ipv4_cidr_block}

---

##### `pod_range`<sup>Optional</sup> <a name="pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig.property.podRange"></a>

```python
pod_range: str
```

- *Type:* str

The ID of the secondary range for pod IPs.

If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_range GoogleContainerNodePool#pod_range}

---

### GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig <a name="GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig(
  disabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disabled GoogleContainerNodePool#disabled}. |

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disabled GoogleContainerNodePool#disabled}.

---

### GoogleContainerNodePoolNodeConfig <a name="GoogleContainerNodePoolNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfig(
  advanced_machine_features: GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures = None,
  boot_disk_kms_key: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  ephemeral_storage_config: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig = None,
  ephemeral_storage_local_ssd_config: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig = None,
  gcfs_config: GoogleContainerNodePoolNodeConfigGcfsConfig = None,
  guest_accelerator: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]] = None,
  gvnic: GoogleContainerNodePoolNodeConfigGvnic = None,
  image_type: str = None,
  kubelet_config: GoogleContainerNodePoolNodeConfigKubeletConfig = None,
  labels: typing.Mapping[str] = None,
  linux_node_config: GoogleContainerNodePoolNodeConfigLinuxNodeConfig = None,
  local_nvme_ssd_block_config: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig = None,
  local_ssd_count: typing.Union[int, float] = None,
  logging_variant: str = None,
  machine_type: str = None,
  metadata: typing.Mapping[str] = None,
  min_cpu_platform: str = None,
  node_group: str = None,
  oauth_scopes: typing.List[str] = None,
  preemptible: typing.Union[bool, IResolvable] = None,
  reservation_affinity: GoogleContainerNodePoolNodeConfigReservationAffinity = None,
  resource_labels: typing.Mapping[str] = None,
  sandbox_config: GoogleContainerNodePoolNodeConfigSandboxConfig = None,
  service_account: str = None,
  shielded_instance_config: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig = None,
  sole_tenant_config: GoogleContainerNodePoolNodeConfigSoleTenantConfig = None,
  spot: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  taint: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]] = None,
  workload_metadata_config: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.bootDiskKmsKey">boot_disk_kms_key</a></code> | <code>str</code> | The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskType">disk_type</a></code> | <code>str</code> | Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageConfig">ephemeral_storage_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | ephemeral_storage_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig">ephemeral_storage_local_ssd_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | ephemeral_storage_local_ssd_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gcfsConfig">gcfs_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | gcfs_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.guestAccelerator">guest_accelerator</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | List of the type and count of accelerator cards attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | gvnic block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.imageType">image_type</a></code> | <code>str</code> | The image type to use for this node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.linuxNodeConfig">linux_node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | linux_node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig">local_nvme_ssd_block_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | local_nvme_ssd_block_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | The number of local SSD disks to be attached to the node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.loggingVariant">logging_variant</a></code> | <code>str</code> | Type of logging agent that is used as the default value for node pools in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.machineType">machine_type</a></code> | <code>str</code> | The name of a Google Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The metadata key/value pairs assigned to instances in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | Minimum CPU platform to be used by this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.nodeGroup">node_group</a></code> | <code>str</code> | Setting this field will assign instances of this pool to run on the specified node group. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | The set of Google API scopes to be made available on all of the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes are created as preemptible VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.resourceLabels">resource_labels</a></code> | <code>typing.Mapping[str]</code> | The GCE resource labels (a map of key/value pairs) to be applied to the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.sandboxConfig">sandbox_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | sandbox_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The Google Cloud Platform Service Account to be used by the node VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.soleTenantConfig">sole_tenant_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a></code> | sole_tenant_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.spot">spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the nodes are created as spot VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The list of instance tags applied to all nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.taint">taint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]</code> | List of Kubernetes taints to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.workloadMetadataConfig">workload_metadata_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | workload_metadata_config block. |

---

##### `advanced_machine_features`<sup>Optional</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#advanced_machine_features GoogleContainerNodePool#advanced_machine_features}

---

##### `boot_disk_kms_key`<sup>Optional</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.bootDiskKmsKey"></a>

```python
boot_disk_kms_key: str
```

- *Type:* str

The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#boot_disk_kms_key GoogleContainerNodePool#boot_disk_kms_key}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disk_size_gb GoogleContainerNodePool#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disk_type GoogleContainerNodePool#disk_type}

---

##### `ephemeral_storage_config`<sup>Optional</sup> <a name="ephemeral_storage_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageConfig"></a>

```python
ephemeral_storage_config: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

ephemeral_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#ephemeral_storage_config GoogleContainerNodePool#ephemeral_storage_config}

---

##### `ephemeral_storage_local_ssd_config`<sup>Optional</sup> <a name="ephemeral_storage_local_ssd_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.ephemeralStorageLocalSsdConfig"></a>

```python
ephemeral_storage_local_ssd_config: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

ephemeral_storage_local_ssd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#ephemeral_storage_local_ssd_config GoogleContainerNodePool#ephemeral_storage_local_ssd_config}

---

##### `gcfs_config`<sup>Optional</sup> <a name="gcfs_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gcfsConfig"></a>

```python
gcfs_config: GoogleContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

gcfs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gcfs_config GoogleContainerNodePool#gcfs_config}

---

##### `guest_accelerator`<sup>Optional</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.guestAccelerator"></a>

```python
guest_accelerator: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]

List of the type and count of accelerator cards attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#guest_accelerator GoogleContainerNodePool#guest_accelerator}

---

##### `gvnic`<sup>Optional</sup> <a name="gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.gvnic"></a>

```python
gvnic: GoogleContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

gvnic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gvnic GoogleContainerNodePool#gvnic}

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

The image type to use for this node.

Note that for a given image type, the latest version of it will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#image_type GoogleContainerNodePool#image_type}

---

##### `kubelet_config`<sup>Optional</sup> <a name="kubelet_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.kubeletConfig"></a>

```python
kubelet_config: GoogleContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#kubelet_config GoogleContainerNodePool#kubelet_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that Kubernetes may apply to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#labels GoogleContainerNodePool#labels}

---

##### `linux_node_config`<sup>Optional</sup> <a name="linux_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.linuxNodeConfig"></a>

```python
linux_node_config: GoogleContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

linux_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#linux_node_config GoogleContainerNodePool#linux_node_config}

---

##### `local_nvme_ssd_block_config`<sup>Optional</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localNvmeSsdBlockConfig"></a>

```python
local_nvme_ssd_block_config: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

local_nvme_ssd_block_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_nvme_ssd_block_config GoogleContainerNodePool#local_nvme_ssd_block_config}

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of local SSD disks to be attached to the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

##### `logging_variant`<sup>Optional</sup> <a name="logging_variant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.loggingVariant"></a>

```python
logging_variant: str
```

- *Type:* str

Type of logging agent that is used as the default value for node pools in the cluster.

Valid values include DEFAULT and MAX_THROUGHPUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#logging_variant GoogleContainerNodePool#logging_variant}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The name of a Google Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#machine_type GoogleContainerNodePool#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The metadata key/value pairs assigned to instances in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#metadata GoogleContainerNodePool#metadata}

---

##### `min_cpu_platform`<sup>Optional</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

Minimum CPU platform to be used by this instance.

The instance may be scheduled on the specified or newer CPU platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#min_cpu_platform GoogleContainerNodePool#min_cpu_platform}

---

##### `node_group`<sup>Optional</sup> <a name="node_group" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.nodeGroup"></a>

```python
node_group: str
```

- *Type:* str

Setting this field will assign instances of this pool to run on the specified node group.

This is useful for running workloads on sole tenant nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_group GoogleContainerNodePool#node_group}

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

The set of Google API scopes to be made available on all of the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#oauth_scopes GoogleContainerNodePool#oauth_scopes}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as preemptible VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#preemptible GoogleContainerNodePool#preemptible}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#reservation_affinity GoogleContainerNodePool#reservation_affinity}

---

##### `resource_labels`<sup>Optional</sup> <a name="resource_labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.resourceLabels"></a>

```python
resource_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The GCE resource labels (a map of key/value pairs) to be applied to the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#resource_labels GoogleContainerNodePool#resource_labels}

---

##### `sandbox_config`<sup>Optional</sup> <a name="sandbox_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.sandboxConfig"></a>

```python
sandbox_config: GoogleContainerNodePoolNodeConfigSandboxConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

sandbox_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sandbox_config GoogleContainerNodePool#sandbox_config}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The Google Cloud Platform Service Account to be used by the node VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#service_account GoogleContainerNodePool#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#shielded_instance_config GoogleContainerNodePool#shielded_instance_config}

---

##### `sole_tenant_config`<sup>Optional</sup> <a name="sole_tenant_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.soleTenantConfig"></a>

```python
sole_tenant_config: GoogleContainerNodePoolNodeConfigSoleTenantConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a>

sole_tenant_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sole_tenant_config GoogleContainerNodePool#sole_tenant_config}

---

##### `spot`<sup>Optional</sup> <a name="spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.spot"></a>

```python
spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the nodes are created as spot VM instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#spot GoogleContainerNodePool#spot}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The list of instance tags applied to all nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#tags GoogleContainerNodePool#tags}

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.taint"></a>

```python
taint: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]

List of Kubernetes taints to be applied to each node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#taint GoogleContainerNodePool#taint}

---

##### `workload_metadata_config`<sup>Optional</sup> <a name="workload_metadata_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig.property.workloadMetadataConfig"></a>

```python
workload_metadata_config: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

workload_metadata_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#workload_metadata_config GoogleContainerNodePool#workload_metadata_config}

---

### GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures <a name="GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures(
  threads_per_core: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | The number of threads per physical core. |

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#threads_per_core GoogleContainerNodePool#threads_per_core}

---

### GoogleContainerNodePoolNodeConfigEphemeralStorageConfig <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig(
  local_ssd_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig(
  local_ssd_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Number of local SSDs to use to back ephemeral storage. |

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigGcfsConfig <a name="GoogleContainerNodePoolNodeConfigGcfsConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not GCFS is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

### GoogleContainerNodePoolNodeConfigGuestAccelerator <a name="GoogleContainerNodePoolNodeConfigGuestAccelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator(
  count: typing.Union[int, float] = None,
  gpu_driver_installation_config: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]] = None,
  gpu_partition_size: str = None,
  gpu_sharing_config: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#count GoogleContainerNodePool#count}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuDriverInstallationConfig">gpu_driver_installation_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_driver_installation_config GoogleContainerNodePool#gpu_driver_installation_config}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize">gpu_partition_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_partition_size GoogleContainerNodePool#gpu_partition_size}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig">gpu_sharing_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_sharing_config GoogleContainerNodePool#gpu_sharing_config}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#count GoogleContainerNodePool#count}.

---

##### `gpu_driver_installation_config`<sup>Optional</sup> <a name="gpu_driver_installation_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuDriverInstallationConfig"></a>

```python
gpu_driver_installation_config: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_driver_installation_config GoogleContainerNodePool#gpu_driver_installation_config}.

---

##### `gpu_partition_size`<sup>Optional</sup> <a name="gpu_partition_size" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuPartitionSize"></a>

```python
gpu_partition_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_partition_size GoogleContainerNodePool#gpu_partition_size}.

---

##### `gpu_sharing_config`<sup>Optional</sup> <a name="gpu_sharing_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.gpuSharingConfig"></a>

```python
gpu_sharing_config: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_sharing_config GoogleContainerNodePool#gpu_sharing_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}.

---

### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig(
  gpu_driver_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.property.gpuDriverVersion">gpu_driver_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_driver_version GoogleContainerNodePool#gpu_driver_version}. |

---

##### `gpu_driver_version`<sup>Optional</sup> <a name="gpu_driver_version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig.property.gpuDriverVersion"></a>

```python
gpu_driver_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_driver_version GoogleContainerNodePool#gpu_driver_version}.

---

### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig(
  gpu_sharing_strategy: str = None,
  max_shared_clients_per_gpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy">gpu_sharing_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_sharing_strategy GoogleContainerNodePool#gpu_sharing_strategy}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu">max_shared_clients_per_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_shared_clients_per_gpu GoogleContainerNodePool#max_shared_clients_per_gpu}. |

---

##### `gpu_sharing_strategy`<sup>Optional</sup> <a name="gpu_sharing_strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.gpuSharingStrategy"></a>

```python
gpu_sharing_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#gpu_sharing_strategy GoogleContainerNodePool#gpu_sharing_strategy}.

---

##### `max_shared_clients_per_gpu`<sup>Optional</sup> <a name="max_shared_clients_per_gpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig.property.maxSharedClientsPerGpu"></a>

```python
max_shared_clients_per_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_shared_clients_per_gpu GoogleContainerNodePool#max_shared_clients_per_gpu}.

---

### GoogleContainerNodePoolNodeConfigGvnic <a name="GoogleContainerNodePoolNodeConfigGvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not gvnic is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

### GoogleContainerNodePoolNodeConfigKubeletConfig <a name="GoogleContainerNodePoolNodeConfigKubeletConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig(
  cpu_manager_policy: str,
  cpu_cfs_quota: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  pod_pids_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | Control the CPU management policy on the node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota">cpu_cfs_quota</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CPU CFS quota enforcement for containers that specify CPU limits. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | Set the CPU CFS quota period value 'cpu.cfs_period_us'. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit">pod_pids_limit</a></code> | <code>typing.Union[int, float]</code> | Controls the maximum number of processes allowed to run in a pod. |

---

##### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_manager_policy GoogleContainerNodePool#cpu_manager_policy}

---

##### `cpu_cfs_quota`<sup>Optional</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuota"></a>

```python
cpu_cfs_quota: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_cfs_quota GoogleContainerNodePool#cpu_cfs_quota}

---

##### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_cfs_quota_period GoogleContainerNodePool#cpu_cfs_quota_period}

---

##### `pod_pids_limit`<sup>Optional</sup> <a name="pod_pids_limit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig.property.podPidsLimit"></a>

```python
pod_pids_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_pids_limit GoogleContainerNodePool#pod_pids_limit}

---

### GoogleContainerNodePoolNodeConfigLinuxNodeConfig <a name="GoogleContainerNodePoolNodeConfigLinuxNodeConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig(
  sysctls: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | The Linux kernel parameters to be applied to the nodes and all pods running on the nodes. |

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sysctls GoogleContainerNodePool#sysctls}

---

### GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig <a name="GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig(
  local_ssd_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Number of raw-block local NVMe SSD disks to be attached to the node. |

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

### GoogleContainerNodePoolNodeConfigReservationAffinity <a name="GoogleContainerNodePoolNodeConfigReservationAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | Corresponds to the type of reservation consumption. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.key">key</a></code> | <code>str</code> | The label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | The label values of the reservation resource. |

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#consume_reservation_type GoogleContainerNodePool#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#values GoogleContainerNodePool#values}

---

### GoogleContainerNodePoolNodeConfigSandboxConfig <a name="GoogleContainerNodePoolNodeConfigSandboxConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig(
  sandbox_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.property.sandboxType">sandbox_type</a></code> | <code>str</code> | Type of the sandbox to use for the node (e.g. 'gvisor'). |

---

##### `sandbox_type`<sup>Required</sup> <a name="sandbox_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig.property.sandboxType"></a>

```python
sandbox_type: str
```

- *Type:* str

Type of the sandbox to use for the node (e.g. 'gvisor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sandbox_type GoogleContainerNodePool#sandbox_type}

---

### GoogleContainerNodePoolNodeConfigShieldedInstanceConfig <a name="GoogleContainerNodePoolNodeConfigShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_integrity_monitoring GoogleContainerNodePool#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_secure_boot GoogleContainerNodePool#enable_secure_boot}

---

### GoogleContainerNodePoolNodeConfigSoleTenantConfig <a name="GoogleContainerNodePoolNodeConfigSoleTenantConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig(
  node_affinity: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig.property.nodeAffinity">node_affinity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]</code> | node_affinity block. |

---

##### `node_affinity`<sup>Required</sup> <a name="node_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig.property.nodeAffinity"></a>

```python
node_affinity: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_affinity GoogleContainerNodePool#node_affinity}

---

### GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity <a name="GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity(
  key: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.key">key</a></code> | <code>str</code> | . |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.operator">operator</a></code> | <code>str</code> | . |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | . |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.operator"></a>

```python
operator: str
```

- *Type:* str

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#operator GoogleContainerNodePool#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#values GoogleContainerNodePool#values}

---

### GoogleContainerNodePoolNodeConfigTaint <a name="GoogleContainerNodePoolNodeConfigTaint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#effect GoogleContainerNodePool#effect}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#value GoogleContainerNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#effect GoogleContainerNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#value GoogleContainerNodePool#value}.

---

### GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig <a name="GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode">mode</a></code> | <code>str</code> | Mode is the configuration for how to expose metadata to workloads running on the node. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#mode GoogleContainerNodePool#mode}

---

### GoogleContainerNodePoolPlacementPolicy <a name="GoogleContainerNodePoolPlacementPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy(
  type: str,
  tpu_topology: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.type">type</a></code> | <code>str</code> | Type defines the type of placement policy. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.tpuTopology">tpu_topology</a></code> | <code>str</code> | TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Type defines the type of placement policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#type GoogleContainerNodePool#type}

---

##### `tpu_topology`<sup>Optional</sup> <a name="tpu_topology" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy.property.tpuTopology"></a>

```python
tpu_topology: str
```

- *Type:* str

TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#tpu_topology GoogleContainerNodePool#tpu_topology}

---

### GoogleContainerNodePoolTimeouts <a name="GoogleContainerNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#create GoogleContainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#delete GoogleContainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#update GoogleContainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#create GoogleContainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#delete GoogleContainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#update GoogleContainerNodePool#update}.

---

### GoogleContainerNodePoolUpgradeSettings <a name="GoogleContainerNodePoolUpgradeSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings(
  blue_green_settings: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings = None,
  max_surge: typing.Union[int, float] = None,
  max_unavailable: typing.Union[int, float] = None,
  strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.blueGreenSettings">blue_green_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | blue_green_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxSurge">max_surge</a></code> | <code>typing.Union[int, float]</code> | The number of additional nodes that can be added to the node pool during an upgrade. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | The number of nodes that can be simultaneously unavailable during an upgrade. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.strategy">strategy</a></code> | <code>str</code> | Update strategy for the given nodepool. |

---

##### `blue_green_settings`<sup>Optional</sup> <a name="blue_green_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.blueGreenSettings"></a>

```python
blue_green_settings: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

blue_green_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#blue_green_settings GoogleContainerNodePool#blue_green_settings}

---

##### `max_surge`<sup>Optional</sup> <a name="max_surge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxSurge"></a>

```python
max_surge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of additional nodes that can be added to the node pool during an upgrade.

Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_surge GoogleContainerNodePool#max_surge}

---

##### `max_unavailable`<sup>Optional</sup> <a name="max_unavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes that can be simultaneously unavailable during an upgrade.

Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#max_unavailable GoogleContainerNodePool#max_unavailable}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Update strategy for the given nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#strategy GoogleContainerNodePool#strategy}

---

### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings(
  standard_rollout_policy: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  node_pool_soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy">standard_rollout_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | standard_rollout_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration">node_pool_soak_duration</a></code> | <code>str</code> | Time needed after draining entire blue pool. After this period, blue pool will be cleaned up. |

---

##### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.standardRolloutPolicy"></a>

```python
standard_rollout_policy: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#standard_rollout_policy GoogleContainerNodePool#standard_rollout_policy}

---

##### `node_pool_soak_duration`<sup>Optional</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings.property.nodePoolSoakDuration"></a>

```python
node_pool_soak_duration: str
```

- *Type:* str

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_pool_soak_duration GoogleContainerNodePool#node_pool_soak_duration}

---

### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy(
  batch_node_count: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  batch_soak_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount">batch_node_count</a></code> | <code>typing.Union[int, float]</code> | Number of blue nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of the blue pool nodes to drain in a batch. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration">batch_soak_duration</a></code> | <code>str</code> | Soak time after each batch gets drained. |

---

##### `batch_node_count`<sup>Optional</sup> <a name="batch_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchNodeCount"></a>

```python
batch_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_node_count GoogleContainerNodePool#batch_node_count}

---

##### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_percentage GoogleContainerNodePool#batch_percentage}

---

##### `batch_soak_duration`<sup>Optional</sup> <a name="batch_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy.property.batchSoakDuration"></a>

```python
batch_soak_duration: str
```

- *Type:* str

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_soak_duration GoogleContainerNodePool#batch_soak_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerNodePoolAutoscalingOutputReference <a name="GoogleContainerNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetLocationPolicy">reset_location_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount">reset_total_max_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount">reset_total_min_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location_policy` <a name="reset_location_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetLocationPolicy"></a>

```python
def reset_location_policy() -> None
```

##### `reset_max_node_count` <a name="reset_max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```

##### `reset_total_max_node_count` <a name="reset_total_max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMaxNodeCount"></a>

```python
def reset_total_max_node_count() -> None
```

##### `reset_total_min_node_count` <a name="reset_total_min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.resetTotalMinNodeCount"></a>

```python
def reset_total_min_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput">location_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput">total_max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput">total_min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicy">location_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount">total_max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount">total_min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_policy_input`<sup>Optional</sup> <a name="location_policy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicyInput"></a>

```python
location_policy_input: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_max_node_count_input`<sup>Optional</sup> <a name="total_max_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCountInput"></a>

```python
total_max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_min_node_count_input`<sup>Optional</sup> <a name="total_min_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCountInput"></a>

```python
total_min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_policy`<sup>Required</sup> <a name="location_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.locationPolicy"></a>

```python
location_policy: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_max_node_count`<sup>Required</sup> <a name="total_max_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMaxNodeCount"></a>

```python
total_max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_min_node_count`<sup>Required</sup> <a name="total_min_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.totalMinNodeCount"></a>

```python
total_min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolAutoscaling">GoogleContainerNodePoolAutoscaling</a>

---


### GoogleContainerNodePoolManagementOutputReference <a name="GoogleContainerNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoRepair">reset_auto_repair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoUpgrade">reset_auto_upgrade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_repair` <a name="reset_auto_repair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoRepair"></a>

```python
def reset_auto_repair() -> None
```

##### `reset_auto_upgrade` <a name="reset_auto_upgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.resetAutoUpgrade"></a>

```python
def reset_auto_upgrade() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepairInput">auto_repair_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgradeInput">auto_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgrade">auto_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_repair_input`<sup>Optional</sup> <a name="auto_repair_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepairInput"></a>

```python
auto_repair_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade_input`<sup>Optional</sup> <a name="auto_upgrade_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgradeInput"></a>

```python
auto_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_repair`<sup>Required</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_upgrade`<sup>Required</sup> <a name="auto_upgrade" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.autoUpgrade"></a>

```python
auto_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolManagement">GoogleContainerNodePoolManagement</a>

---


### GoogleContainerNodePoolNetworkConfigOutputReference <a name="GoogleContainerNodePoolNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig">put_pod_cidr_overprovision_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange">reset_create_pod_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes">reset_enable_private_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig">reset_pod_cidr_overprovision_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock">reset_pod_ipv4_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodRange">reset_pod_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pod_cidr_overprovision_config` <a name="put_pod_cidr_overprovision_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig"></a>

```python
def put_pod_cidr_overprovision_config(
  disabled: typing.Union[bool, IResolvable]
) -> None
```

###### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.putPodCidrOverprovisionConfig.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#disabled GoogleContainerNodePool#disabled}.

---

##### `reset_create_pod_range` <a name="reset_create_pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetCreatePodRange"></a>

```python
def reset_create_pod_range() -> None
```

##### `reset_enable_private_nodes` <a name="reset_enable_private_nodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetEnablePrivateNodes"></a>

```python
def reset_enable_private_nodes() -> None
```

##### `reset_pod_cidr_overprovision_config` <a name="reset_pod_cidr_overprovision_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodCidrOverprovisionConfig"></a>

```python
def reset_pod_cidr_overprovision_config() -> None
```

##### `reset_pod_ipv4_cidr_block` <a name="reset_pod_ipv4_cidr_block" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodIpv4CidrBlock"></a>

```python
def reset_pod_ipv4_cidr_block() -> None
```

##### `reset_pod_range` <a name="reset_pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.resetPodRange"></a>

```python
def reset_pod_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig">pod_cidr_overprovision_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput">create_pod_range_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput">enable_private_nodes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput">pod_cidr_overprovision_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput">pod_ipv4_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRangeInput">pod_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRange">create_pod_range</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes">enable_private_nodes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock">pod_ipv4_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRange">pod_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pod_cidr_overprovision_config`<sup>Required</sup> <a name="pod_cidr_overprovision_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfig"></a>

```python
pod_cidr_overprovision_config: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference</a>

---

##### `create_pod_range_input`<sup>Optional</sup> <a name="create_pod_range_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRangeInput"></a>

```python
create_pod_range_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_private_nodes_input`<sup>Optional</sup> <a name="enable_private_nodes_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodesInput"></a>

```python
enable_private_nodes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_cidr_overprovision_config_input`<sup>Optional</sup> <a name="pod_cidr_overprovision_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podCidrOverprovisionConfigInput"></a>

```python
pod_cidr_overprovision_config_input: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---

##### `pod_ipv4_cidr_block_input`<sup>Optional</sup> <a name="pod_ipv4_cidr_block_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlockInput"></a>

```python
pod_ipv4_cidr_block_input: str
```

- *Type:* str

---

##### `pod_range_input`<sup>Optional</sup> <a name="pod_range_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRangeInput"></a>

```python
pod_range_input: str
```

- *Type:* str

---

##### `create_pod_range`<sup>Required</sup> <a name="create_pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.createPodRange"></a>

```python
create_pod_range: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_private_nodes`<sup>Required</sup> <a name="enable_private_nodes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.enablePrivateNodes"></a>

```python
enable_private_nodes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pod_ipv4_cidr_block`<sup>Required</sup> <a name="pod_ipv4_cidr_block" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podIpv4CidrBlock"></a>

```python
pod_ipv4_cidr_block: str
```

- *Type:* str

---

##### `pod_range`<sup>Required</sup> <a name="pod_range" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.podRange"></a>

```python
pod_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfig">GoogleContainerNodePoolNetworkConfig</a>

---


### GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference <a name="GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig">GoogleContainerNodePoolNetworkConfigPodCidrOverprovisionConfig</a>

---


### GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference <a name="GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threads_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `threads_per_core_input`<sup>Optional</sup> <a name="threads_per_core_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```python
threads_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---


### GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

---


### GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---


### GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resetGpuDriverVersion">reset_gpu_driver_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gpu_driver_version` <a name="reset_gpu_driver_version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.resetGpuDriverVersion"></a>

```python
def reset_gpu_driver_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersionInput">gpu_driver_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersion">gpu_driver_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_driver_version_input`<sup>Optional</sup> <a name="gpu_driver_version_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersionInput"></a>

```python
gpu_driver_version_input: str
```

- *Type:* str

---

##### `gpu_driver_version`<sup>Required</sup> <a name="gpu_driver_version" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.gpuDriverVersion"></a>

```python
gpu_driver_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy">reset_gpu_sharing_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu">reset_max_shared_clients_per_gpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gpu_sharing_strategy` <a name="reset_gpu_sharing_strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetGpuSharingStrategy"></a>

```python
def reset_gpu_sharing_strategy() -> None
```

##### `reset_max_shared_clients_per_gpu` <a name="reset_max_shared_clients_per_gpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.resetMaxSharedClientsPerGpu"></a>

```python
def reset_max_shared_clients_per_gpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput">gpu_sharing_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput">max_shared_clients_per_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy">gpu_sharing_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu">max_shared_clients_per_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_sharing_strategy_input`<sup>Optional</sup> <a name="gpu_sharing_strategy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategyInput"></a>

```python
gpu_sharing_strategy_input: str
```

- *Type:* str

---

##### `max_shared_clients_per_gpu_input`<sup>Optional</sup> <a name="max_shared_clients_per_gpu_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpuInput"></a>

```python
max_shared_clients_per_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_sharing_strategy`<sup>Required</sup> <a name="gpu_sharing_strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.gpuSharingStrategy"></a>

```python
gpu_sharing_strategy: str
```

- *Type:* str

---

##### `max_shared_clients_per_gpu`<sup>Required</sup> <a name="max_shared_clients_per_gpu" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.maxSharedClientsPerGpu"></a>

```python
max_shared_clients_per_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorList <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]

---


### GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference <a name="GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig">put_gpu_driver_installation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig">put_gpu_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuDriverInstallationConfig">reset_gpu_driver_installation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize">reset_gpu_partition_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig">reset_gpu_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gpu_driver_installation_config` <a name="put_gpu_driver_installation_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig"></a>

```python
def put_gpu_driver_installation_config(
  value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuDriverInstallationConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]

---

##### `put_gpu_sharing_config` <a name="put_gpu_sharing_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig"></a>

```python
def put_gpu_sharing_config(
  value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.putGpuSharingConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_gpu_driver_installation_config` <a name="reset_gpu_driver_installation_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuDriverInstallationConfig"></a>

```python
def reset_gpu_driver_installation_config() -> None
```

##### `reset_gpu_partition_size` <a name="reset_gpu_partition_size" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuPartitionSize"></a>

```python
def reset_gpu_partition_size() -> None
```

##### `reset_gpu_sharing_config` <a name="reset_gpu_sharing_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetGpuSharingConfig"></a>

```python
def reset_gpu_sharing_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfig">gpu_driver_installation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig">gpu_sharing_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfigInput">gpu_driver_installation_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput">gpu_partition_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput">gpu_sharing_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize">gpu_partition_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gpu_driver_installation_config`<sup>Required</sup> <a name="gpu_driver_installation_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfig"></a>

```python
gpu_driver_installation_config: GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList</a>

---

##### `gpu_sharing_config`<sup>Required</sup> <a name="gpu_sharing_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfig"></a>

```python
gpu_sharing_config: GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_driver_installation_config_input`<sup>Optional</sup> <a name="gpu_driver_installation_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuDriverInstallationConfigInput"></a>

```python
gpu_driver_installation_config_input: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig</a>]]

---

##### `gpu_partition_size_input`<sup>Optional</sup> <a name="gpu_partition_size_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSizeInput"></a>

```python
gpu_partition_size_input: str
```

- *Type:* str

---

##### `gpu_sharing_config_input`<sup>Optional</sup> <a name="gpu_sharing_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuSharingConfigInput"></a>

```python
gpu_sharing_config_input: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig">GoogleContainerNodePoolNodeConfigGuestAcceleratorGpuSharingConfig</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_partition_size`<sup>Required</sup> <a name="gpu_partition_size" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.gpuPartitionSize"></a>

```python
gpu_partition_size: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolNodeConfigGuestAccelerator]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]

---


### GoogleContainerNodePoolNodeConfigGvnicOutputReference <a name="GoogleContainerNodePoolNodeConfigGvnicOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

---


### GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota">reset_cpu_cfs_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">reset_cpu_cfs_quota_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit">reset_pod_pids_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_cfs_quota` <a name="reset_cpu_cfs_quota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```python
def reset_cpu_cfs_quota() -> None
```

##### `reset_cpu_cfs_quota_period` <a name="reset_cpu_cfs_quota_period" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```python
def reset_cpu_cfs_quota_period() -> None
```

##### `reset_pod_pids_limit` <a name="reset_pod_pids_limit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.resetPodPidsLimit"></a>

```python
def reset_pod_pids_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpu_cfs_quota_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpu_cfs_quota_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpu_manager_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput">pod_pids_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota">cpu_cfs_quota</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpu_cfs_quota_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy">cpu_manager_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit">pod_pids_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_cfs_quota_input`<sup>Optional</sup> <a name="cpu_cfs_quota_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```python
cpu_cfs_quota_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period_input`<sup>Optional</sup> <a name="cpu_cfs_quota_period_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```python
cpu_cfs_quota_period_input: str
```

- *Type:* str

---

##### `cpu_manager_policy_input`<sup>Optional</sup> <a name="cpu_manager_policy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```python
cpu_manager_policy_input: str
```

- *Type:* str

---

##### `pod_pids_limit_input`<sup>Optional</sup> <a name="pod_pids_limit_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```python
pod_pids_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_cfs_quota`<sup>Required</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```python
cpu_cfs_quota: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_cfs_quota_period`<sup>Required</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```python
cpu_cfs_quota_period: str
```

- *Type:* str

---

##### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```python
cpu_manager_policy: str
```

- *Type:* str

---

##### `pod_pids_limit`<sup>Required</sup> <a name="pod_pids_limit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.podPidsLimit"></a>

```python
pod_pids_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

---


### GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput">sysctls_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls">sysctls</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sysctls_input`<sup>Optional</sup> <a name="sysctls_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctlsInput"></a>

```python
sysctls_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.sysctls"></a>

```python
sysctls: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

---


### GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---


### GoogleContainerNodePoolNodeConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures">put_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig">put_ephemeral_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig">put_ephemeral_storage_local_ssd_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig">put_gcfs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator">put_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic">put_gvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig">put_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig">put_linux_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig">put_local_nvme_ssd_block_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig">put_sandbox_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig">put_sole_tenant_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint">put_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig">put_workload_metadata_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures">reset_advanced_machine_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey">reset_boot_disk_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageConfig">reset_ephemeral_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig">reset_ephemeral_storage_local_ssd_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGcfsConfig">reset_gcfs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator">reset_guest_accelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGvnic">reset_gvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetKubeletConfig">reset_kubelet_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig">reset_linux_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig">reset_local_nvme_ssd_block_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLoggingVariant">reset_logging_variant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform">reset_min_cpu_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetNodeGroup">reset_node_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetPreemptible">reset_preemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetResourceLabels">reset_resource_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSandboxConfig">reset_sandbox_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSoleTenantConfig">reset_sole_tenant_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSpot">reset_spot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTaint">reset_taint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig">reset_workload_metadata_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_machine_features` <a name="put_advanced_machine_features" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures"></a>

```python
def put_advanced_machine_features(
  threads_per_core: typing.Union[int, float]
) -> None
```

###### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putAdvancedMachineFeatures.parameter.threadsPerCore"></a>

- *Type:* typing.Union[int, float]

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#threads_per_core GoogleContainerNodePool#threads_per_core}

---

##### `put_ephemeral_storage_config` <a name="put_ephemeral_storage_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig"></a>

```python
def put_ephemeral_storage_config(
  local_ssd_count: typing.Union[int, float]
) -> None
```

###### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

##### `put_ephemeral_storage_local_ssd_config` <a name="put_ephemeral_storage_local_ssd_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig"></a>

```python
def put_ephemeral_storage_local_ssd_config(
  local_ssd_count: typing.Union[int, float]
) -> None
```

###### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putEphemeralStorageLocalSsdConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Number of local SSDs to use to back ephemeral storage.

Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

##### `put_gcfs_config` <a name="put_gcfs_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig"></a>

```python
def put_gcfs_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGcfsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not GCFS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

##### `put_guest_accelerator` <a name="put_guest_accelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator"></a>

```python
def put_guest_accelerator(
  value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGuestAccelerator.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]

---

##### `put_gvnic` <a name="put_gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic"></a>

```python
def put_gvnic(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putGvnic.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not gvnic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enabled GoogleContainerNodePool#enabled}

---

##### `put_kubelet_config` <a name="put_kubelet_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig"></a>

```python
def put_kubelet_config(
  cpu_manager_policy: str,
  cpu_cfs_quota: typing.Union[bool, IResolvable] = None,
  cpu_cfs_quota_period: str = None,
  pod_pids_limit: typing.Union[int, float] = None
) -> None
```

###### `cpu_manager_policy`<sup>Required</sup> <a name="cpu_manager_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuManagerPolicy"></a>

- *Type:* str

Control the CPU management policy on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_manager_policy GoogleContainerNodePool#cpu_manager_policy}

---

###### `cpu_cfs_quota`<sup>Optional</sup> <a name="cpu_cfs_quota" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuCfsQuota"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CPU CFS quota enforcement for containers that specify CPU limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_cfs_quota GoogleContainerNodePool#cpu_cfs_quota}

---

###### `cpu_cfs_quota_period`<sup>Optional</sup> <a name="cpu_cfs_quota_period" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.cpuCfsQuotaPeriod"></a>

- *Type:* str

Set the CPU CFS quota period value 'cpu.cfs_period_us'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#cpu_cfs_quota_period GoogleContainerNodePool#cpu_cfs_quota_period}

---

###### `pod_pids_limit`<sup>Optional</sup> <a name="pod_pids_limit" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putKubeletConfig.parameter.podPidsLimit"></a>

- *Type:* typing.Union[int, float]

Controls the maximum number of processes allowed to run in a pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#pod_pids_limit GoogleContainerNodePool#pod_pids_limit}

---

##### `put_linux_node_config` <a name="put_linux_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig"></a>

```python
def put_linux_node_config(
  sysctls: typing.Mapping[str]
) -> None
```

###### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLinuxNodeConfig.parameter.sysctls"></a>

- *Type:* typing.Mapping[str]

The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sysctls GoogleContainerNodePool#sysctls}

---

##### `put_local_nvme_ssd_block_config` <a name="put_local_nvme_ssd_block_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig"></a>

```python
def put_local_nvme_ssd_block_config(
  local_ssd_count: typing.Union[int, float]
) -> None
```

###### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putLocalNvmeSsdBlockConfig.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Number of raw-block local NVMe SSD disks to be attached to the node.

Each local SSD is 375 GB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.consumeReservationType"></a>

- *Type:* str

Corresponds to the type of reservation consumption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#consume_reservation_type GoogleContainerNodePool#consume_reservation_type}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.key"></a>

- *Type:* str

The label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#key GoogleContainerNodePool#key}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

The label values of the reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#values GoogleContainerNodePool#values}

---

##### `put_sandbox_config` <a name="put_sandbox_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig"></a>

```python
def put_sandbox_config(
  sandbox_type: str
) -> None
```

###### `sandbox_type`<sup>Required</sup> <a name="sandbox_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSandboxConfig.parameter.sandboxType"></a>

- *Type:* str

Type of the sandbox to use for the node (e.g. 'gvisor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#sandbox_type GoogleContainerNodePool#sandbox_type}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_integrity_monitoring GoogleContainerNodePool#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#enable_secure_boot GoogleContainerNodePool#enable_secure_boot}

---

##### `put_sole_tenant_config` <a name="put_sole_tenant_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig"></a>

```python
def put_sole_tenant_config(
  node_affinity: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
) -> None
```

###### `node_affinity`<sup>Required</sup> <a name="node_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putSoleTenantConfig.parameter.nodeAffinity"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_affinity GoogleContainerNodePool#node_affinity}

---

##### `put_taint` <a name="put_taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint"></a>

```python
def put_taint(
  value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putTaint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]

---

##### `put_workload_metadata_config` <a name="put_workload_metadata_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig"></a>

```python
def put_workload_metadata_config(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.putWorkloadMetadataConfig.parameter.mode"></a>

- *Type:* str

Mode is the configuration for how to expose metadata to workloads running on the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#mode GoogleContainerNodePool#mode}

---

##### `reset_advanced_machine_features` <a name="reset_advanced_machine_features" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetAdvancedMachineFeatures"></a>

```python
def reset_advanced_machine_features() -> None
```

##### `reset_boot_disk_kms_key` <a name="reset_boot_disk_kms_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetBootDiskKmsKey"></a>

```python
def reset_boot_disk_kms_key() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_ephemeral_storage_config` <a name="reset_ephemeral_storage_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageConfig"></a>

```python
def reset_ephemeral_storage_config() -> None
```

##### `reset_ephemeral_storage_local_ssd_config` <a name="reset_ephemeral_storage_local_ssd_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetEphemeralStorageLocalSsdConfig"></a>

```python
def reset_ephemeral_storage_local_ssd_config() -> None
```

##### `reset_gcfs_config` <a name="reset_gcfs_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGcfsConfig"></a>

```python
def reset_gcfs_config() -> None
```

##### `reset_guest_accelerator` <a name="reset_guest_accelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGuestAccelerator"></a>

```python
def reset_guest_accelerator() -> None
```

##### `reset_gvnic` <a name="reset_gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetGvnic"></a>

```python
def reset_gvnic() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_kubelet_config` <a name="reset_kubelet_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetKubeletConfig"></a>

```python
def reset_kubelet_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_linux_node_config` <a name="reset_linux_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLinuxNodeConfig"></a>

```python
def reset_linux_node_config() -> None
```

##### `reset_local_nvme_ssd_block_config` <a name="reset_local_nvme_ssd_block_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalNvmeSsdBlockConfig"></a>

```python
def reset_local_nvme_ssd_block_config() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_logging_variant` <a name="reset_logging_variant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetLoggingVariant"></a>

```python
def reset_logging_variant() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_min_cpu_platform` <a name="reset_min_cpu_platform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetMinCpuPlatform"></a>

```python
def reset_min_cpu_platform() -> None
```

##### `reset_node_group` <a name="reset_node_group" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetNodeGroup"></a>

```python
def reset_node_group() -> None
```

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```

##### `reset_preemptible` <a name="reset_preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetPreemptible"></a>

```python
def reset_preemptible() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_resource_labels` <a name="reset_resource_labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetResourceLabels"></a>

```python
def reset_resource_labels() -> None
```

##### `reset_sandbox_config` <a name="reset_sandbox_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSandboxConfig"></a>

```python
def reset_sandbox_config() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_sole_tenant_config` <a name="reset_sole_tenant_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSoleTenantConfig"></a>

```python
def reset_sole_tenant_config() -> None
```

##### `reset_spot` <a name="reset_spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetSpot"></a>

```python
def reset_spot() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taint` <a name="reset_taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetTaint"></a>

```python
def reset_taint() -> None
```

##### `reset_workload_metadata_config` <a name="reset_workload_metadata_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.resetWorkloadMetadataConfig"></a>

```python
def reset_workload_metadata_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfig">ephemeral_storage_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig">ephemeral_storage_local_ssd_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfig">gcfs_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference">GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList">GoogleContainerNodePoolNodeConfigGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnic">gvnic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference">GoogleContainerNodePoolNodeConfigGvnicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfig">kubelet_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference">GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig">linux_node_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig">local_nvme_ssd_block_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference">GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfig">sandbox_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference">GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.soleTenantConfig">sole_tenant_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference">GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taint">taint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList">GoogleContainerNodePoolNodeConfigTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig">workload_metadata_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput">advanced_machine_features_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput">boot_disk_kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfigInput">ephemeral_storage_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput">ephemeral_storage_local_ssd_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput">gcfs_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput">guest_accelerator_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnicInput">gvnic_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput">kubelet_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput">linux_node_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput">local_nvme_ssd_block_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput">logging_variant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput">min_cpu_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput">node_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptibleInput">preemptible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput">resource_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfigInput">sandbox_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.soleTenantConfigInput">sole_tenant_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spotInput">spot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taintInput">taint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput">workload_metadata_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey">boot_disk_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariant">logging_variant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroup">node_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptible">preemptible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabels">resource_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spot">spot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference">GoogleContainerNodePoolNodeConfigAdvancedMachineFeaturesOutputReference</a>

---

##### `ephemeral_storage_config`<sup>Required</sup> <a name="ephemeral_storage_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfig"></a>

```python
ephemeral_storage_config: GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference</a>

---

##### `ephemeral_storage_local_ssd_config`<sup>Required</sup> <a name="ephemeral_storage_local_ssd_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfig"></a>

```python
ephemeral_storage_local_ssd_config: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference</a>

---

##### `gcfs_config`<sup>Required</sup> <a name="gcfs_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfig"></a>

```python
gcfs_config: GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference">GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference</a>

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAccelerator"></a>

```python
guest_accelerator: GoogleContainerNodePoolNodeConfigGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAcceleratorList">GoogleContainerNodePoolNodeConfigGuestAcceleratorList</a>

---

##### `gvnic`<sup>Required</sup> <a name="gvnic" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnic"></a>

```python
gvnic: GoogleContainerNodePoolNodeConfigGvnicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnicOutputReference">GoogleContainerNodePoolNodeConfigGvnicOutputReference</a>

---

##### `kubelet_config`<sup>Required</sup> <a name="kubelet_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfig"></a>

```python
kubelet_config: GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference">GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference</a>

---

##### `linux_node_config`<sup>Required</sup> <a name="linux_node_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfig"></a>

```python
linux_node_config: GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference">GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference</a>

---

##### `local_nvme_ssd_block_config`<sup>Required</sup> <a name="local_nvme_ssd_block_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfig"></a>

```python
local_nvme_ssd_block_config: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference</a>

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference">GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference</a>

---

##### `sandbox_config`<sup>Required</sup> <a name="sandbox_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfig"></a>

```python
sandbox_config: GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference">GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference">GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference</a>

---

##### `sole_tenant_config`<sup>Required</sup> <a name="sole_tenant_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.soleTenantConfig"></a>

```python
sole_tenant_config: GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference">GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference</a>

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taint"></a>

```python
taint: GoogleContainerNodePoolNodeConfigTaintList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList">GoogleContainerNodePoolNodeConfigTaintList</a>

---

##### `workload_metadata_config`<sup>Required</sup> <a name="workload_metadata_config" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfig"></a>

```python
workload_metadata_config: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference</a>

---

##### `advanced_machine_features_input`<sup>Optional</sup> <a name="advanced_machine_features_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.advancedMachineFeaturesInput"></a>

```python
advanced_machine_features_input: GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures">GoogleContainerNodePoolNodeConfigAdvancedMachineFeatures</a>

---

##### `boot_disk_kms_key_input`<sup>Optional</sup> <a name="boot_disk_kms_key_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKeyInput"></a>

```python
boot_disk_kms_key_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `ephemeral_storage_config_input`<sup>Optional</sup> <a name="ephemeral_storage_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageConfigInput"></a>

```python
ephemeral_storage_config_input: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageConfig</a>

---

##### `ephemeral_storage_local_ssd_config_input`<sup>Optional</sup> <a name="ephemeral_storage_local_ssd_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.ephemeralStorageLocalSsdConfigInput"></a>

```python
ephemeral_storage_local_ssd_config_input: GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig">GoogleContainerNodePoolNodeConfigEphemeralStorageLocalSsdConfig</a>

---

##### `gcfs_config_input`<sup>Optional</sup> <a name="gcfs_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gcfsConfigInput"></a>

```python
gcfs_config_input: GoogleContainerNodePoolNodeConfigGcfsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGcfsConfig">GoogleContainerNodePoolNodeConfigGcfsConfig</a>

---

##### `guest_accelerator_input`<sup>Optional</sup> <a name="guest_accelerator_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.guestAcceleratorInput"></a>

```python
guest_accelerator_input: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigGuestAccelerator]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGuestAccelerator">GoogleContainerNodePoolNodeConfigGuestAccelerator</a>]]

---

##### `gvnic_input`<sup>Optional</sup> <a name="gvnic_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.gvnicInput"></a>

```python
gvnic_input: GoogleContainerNodePoolNodeConfigGvnic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigGvnic">GoogleContainerNodePoolNodeConfigGvnic</a>

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `kubelet_config_input`<sup>Optional</sup> <a name="kubelet_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.kubeletConfigInput"></a>

```python
kubelet_config_input: GoogleContainerNodePoolNodeConfigKubeletConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigKubeletConfig">GoogleContainerNodePoolNodeConfigKubeletConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `linux_node_config_input`<sup>Optional</sup> <a name="linux_node_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.linuxNodeConfigInput"></a>

```python
linux_node_config_input: GoogleContainerNodePoolNodeConfigLinuxNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLinuxNodeConfig">GoogleContainerNodePoolNodeConfigLinuxNodeConfig</a>

---

##### `local_nvme_ssd_block_config_input`<sup>Optional</sup> <a name="local_nvme_ssd_block_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localNvmeSsdBlockConfigInput"></a>

```python
local_nvme_ssd_block_config_input: GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig">GoogleContainerNodePoolNodeConfigLocalNvmeSsdBlockConfig</a>

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_variant_input`<sup>Optional</sup> <a name="logging_variant_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariantInput"></a>

```python
logging_variant_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_cpu_platform_input`<sup>Optional</sup> <a name="min_cpu_platform_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatformInput"></a>

```python
min_cpu_platform_input: str
```

- *Type:* str

---

##### `node_group_input`<sup>Optional</sup> <a name="node_group_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroupInput"></a>

```python
node_group_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_input`<sup>Optional</sup> <a name="preemptible_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptibleInput"></a>

```python
preemptible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: GoogleContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

---

##### `resource_labels_input`<sup>Optional</sup> <a name="resource_labels_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabelsInput"></a>

```python
resource_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sandbox_config_input`<sup>Optional</sup> <a name="sandbox_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.sandboxConfigInput"></a>

```python
sandbox_config_input: GoogleContainerNodePoolNodeConfigSandboxConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---

##### `sole_tenant_config_input`<sup>Optional</sup> <a name="sole_tenant_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.soleTenantConfigInput"></a>

```python
sole_tenant_config_input: GoogleContainerNodePoolNodeConfigSoleTenantConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a>

---

##### `spot_input`<sup>Optional</sup> <a name="spot_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spotInput"></a>

```python
spot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `taint_input`<sup>Optional</sup> <a name="taint_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.taintInput"></a>

```python
taint_input: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]

---

##### `workload_metadata_config_input`<sup>Optional</sup> <a name="workload_metadata_config_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.workloadMetadataConfigInput"></a>

```python
workload_metadata_config_input: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---

##### `boot_disk_kms_key`<sup>Required</sup> <a name="boot_disk_kms_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.bootDiskKmsKey"></a>

```python
boot_disk_kms_key: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_variant`<sup>Required</sup> <a name="logging_variant" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.loggingVariant"></a>

```python
logging_variant: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `node_group`<sup>Required</sup> <a name="node_group" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.nodeGroup"></a>

```python
node_group: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.preemptible"></a>

```python
preemptible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_labels`<sup>Required</sup> <a name="resource_labels" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.resourceLabels"></a>

```python
resource_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `spot`<sup>Required</sup> <a name="spot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.spot"></a>

```python
spot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfig">GoogleContainerNodePoolNodeConfig</a>

---


### GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference <a name="GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput">consume_reservation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consume_reservation_type_input`<sup>Optional</sup> <a name="consume_reservation_type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```python
consume_reservation_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigReservationAffinity">GoogleContainerNodePoolNodeConfigReservationAffinity</a>

---


### GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxTypeInput">sandbox_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxType">sandbox_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sandbox_type_input`<sup>Optional</sup> <a name="sandbox_type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxTypeInput"></a>

```python
sandbox_type_input: str
```

- *Type:* str

---

##### `sandbox_type`<sup>Required</sup> <a name="sandbox_type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.sandboxType"></a>

```python
sandbox_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigSandboxConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSandboxConfig">GoogleContainerNodePoolNodeConfigSandboxConfig</a>

---


### GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigShieldedInstanceConfig">GoogleContainerNodePoolNodeConfigShieldedInstanceConfig</a>

---


### GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList <a name="GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]

---


### GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference <a name="GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]

---


### GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity">put_node_affinity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_affinity` <a name="put_node_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity"></a>

```python
def put_node_affinity(
  value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinity">node_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinityInput">node_affinity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_affinity`<sup>Required</sup> <a name="node_affinity" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinity"></a>

```python
node_affinity: GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinityList</a>

---

##### `node_affinity_input`<sup>Optional</sup> <a name="node_affinity_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.nodeAffinityInput"></a>

```python
node_affinity_input: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity">GoogleContainerNodePoolNodeConfigSoleTenantConfigNodeAffinity</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigSoleTenantConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigSoleTenantConfig">GoogleContainerNodePoolNodeConfigSoleTenantConfig</a>

---


### GoogleContainerNodePoolNodeConfigTaintList <a name="GoogleContainerNodePoolNodeConfigTaintList" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerNodePoolNodeConfigTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerNodePoolNodeConfigTaint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]]

---


### GoogleContainerNodePoolNodeConfigTaintOutputReference <a name="GoogleContainerNodePoolNodeConfigTaintOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaintOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolNodeConfigTaint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigTaint">GoogleContainerNodePoolNodeConfigTaint</a>]

---


### GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference <a name="GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig">GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig</a>

---


### GoogleContainerNodePoolPlacementPolicyOutputReference <a name="GoogleContainerNodePoolPlacementPolicyOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resetTpuTopology">reset_tpu_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tpu_topology` <a name="reset_tpu_topology" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.resetTpuTopology"></a>

```python
def reset_tpu_topology() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.tpuTopologyInput">tpu_topology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.tpuTopology">tpu_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tpu_topology_input`<sup>Optional</sup> <a name="tpu_topology_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.tpuTopologyInput"></a>

```python
tpu_topology_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `tpu_topology`<sup>Required</sup> <a name="tpu_topology" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.tpuTopology"></a>

```python
tpu_topology: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolPlacementPolicy">GoogleContainerNodePoolPlacementPolicy</a>

---


### GoogleContainerNodePoolTimeoutsOutputReference <a name="GoogleContainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolTimeouts">GoogleContainerNodePoolTimeouts</a>]

---


### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy">put_standard_rollout_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration">reset_node_pool_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_rollout_policy` <a name="put_standard_rollout_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy"></a>

```python
def put_standard_rollout_policy(
  batch_node_count: typing.Union[int, float] = None,
  batch_percentage: typing.Union[int, float] = None,
  batch_soak_duration: str = None
) -> None
```

###### `batch_node_count`<sup>Optional</sup> <a name="batch_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchNodeCount"></a>

- *Type:* typing.Union[int, float]

Number of blue nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_node_count GoogleContainerNodePool#batch_node_count}

---

###### `batch_percentage`<sup>Optional</sup> <a name="batch_percentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchPercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of the blue pool nodes to drain in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_percentage GoogleContainerNodePool#batch_percentage}

---

###### `batch_soak_duration`<sup>Optional</sup> <a name="batch_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.putStandardRolloutPolicy.parameter.batchSoakDuration"></a>

- *Type:* str

Soak time after each batch gets drained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#batch_soak_duration GoogleContainerNodePool#batch_soak_duration}

---

##### `reset_node_pool_soak_duration` <a name="reset_node_pool_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.resetNodePoolSoakDuration"></a>

```python
def reset_node_pool_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy">standard_rollout_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput">node_pool_soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput">standard_rollout_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration">node_pool_soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicy"></a>

```python
standard_rollout_policy: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference</a>

---

##### `node_pool_soak_duration_input`<sup>Optional</sup> <a name="node_pool_soak_duration_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDurationInput"></a>

```python
node_pool_soak_duration_input: str
```

- *Type:* str

---

##### `standard_rollout_policy_input`<sup>Optional</sup> <a name="standard_rollout_policy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.standardRolloutPolicyInput"></a>

```python
standard_rollout_policy_input: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---

##### `node_pool_soak_duration`<sup>Required</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.nodePoolSoakDuration"></a>

```python
node_pool_soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---


### GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount">reset_batch_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage">reset_batch_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration">reset_batch_soak_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_node_count` <a name="reset_batch_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchNodeCount"></a>

```python
def reset_batch_node_count() -> None
```

##### `reset_batch_percentage` <a name="reset_batch_percentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchPercentage"></a>

```python
def reset_batch_percentage() -> None
```

##### `reset_batch_soak_duration` <a name="reset_batch_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.resetBatchSoakDuration"></a>

```python
def reset_batch_soak_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput">batch_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput">batch_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput">batch_soak_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount">batch_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration">batch_soak_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_node_count_input`<sup>Optional</sup> <a name="batch_node_count_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCountInput"></a>

```python
batch_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage_input`<sup>Optional</sup> <a name="batch_percentage_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentageInput"></a>

```python
batch_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_soak_duration_input`<sup>Optional</sup> <a name="batch_soak_duration_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDurationInput"></a>

```python
batch_soak_duration_input: str
```

- *Type:* str

---

##### `batch_node_count`<sup>Required</sup> <a name="batch_node_count" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchNodeCount"></a>

```python
batch_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage`<sup>Required</sup> <a name="batch_percentage" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_soak_duration`<sup>Required</sup> <a name="batch_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.batchSoakDuration"></a>

```python
batch_soak_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

---


### GoogleContainerNodePoolUpgradeSettingsOutputReference <a name="GoogleContainerNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_node_pool

googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings">put_blue_green_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings">reset_blue_green_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge">reset_max_surge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable">reset_max_unavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_blue_green_settings` <a name="put_blue_green_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings"></a>

```python
def put_blue_green_settings(
  standard_rollout_policy: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy,
  node_pool_soak_duration: str = None
) -> None
```

###### `standard_rollout_policy`<sup>Required</sup> <a name="standard_rollout_policy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.standardRolloutPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy</a>

standard_rollout_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#standard_rollout_policy GoogleContainerNodePool#standard_rollout_policy}

---

###### `node_pool_soak_duration`<sup>Optional</sup> <a name="node_pool_soak_duration" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.putBlueGreenSettings.parameter.nodePoolSoakDuration"></a>

- *Type:* str

Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_container_node_pool#node_pool_soak_duration GoogleContainerNodePool#node_pool_soak_duration}

---

##### `reset_blue_green_settings` <a name="reset_blue_green_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetBlueGreenSettings"></a>

```python
def reset_blue_green_settings() -> None
```

##### `reset_max_surge` <a name="reset_max_surge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxSurge"></a>

```python
def reset_max_surge() -> None
```

##### `reset_max_unavailable` <a name="reset_max_unavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetMaxUnavailable"></a>

```python
def reset_max_unavailable() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings">blue_green_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput">blue_green_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput">max_surge_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput">max_unavailable_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge">max_surge</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable">max_unavailable</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blue_green_settings`<sup>Required</sup> <a name="blue_green_settings" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettings"></a>

```python
blue_green_settings: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettingsOutputReference</a>

---

##### `blue_green_settings_input`<sup>Optional</sup> <a name="blue_green_settings_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.blueGreenSettingsInput"></a>

```python
blue_green_settings_input: GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings">GoogleContainerNodePoolUpgradeSettingsBlueGreenSettings</a>

---

##### `max_surge_input`<sup>Optional</sup> <a name="max_surge_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurgeInput"></a>

```python
max_surge_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable_input`<sup>Optional</sup> <a name="max_unavailable_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailableInput"></a>

```python
max_unavailable_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `max_surge`<sup>Required</sup> <a name="max_surge" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```python
max_surge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_unavailable`<sup>Required</sup> <a name="max_unavailable" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.maxUnavailable"></a>

```python
max_unavailable: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerNodePool.GoogleContainerNodePoolUpgradeSettings">GoogleContainerNodePoolUpgradeSettings</a>

---



