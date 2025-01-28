# `googleEdgecontainerCluster` Submodule <a name="`googleEdgecontainerCluster` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerCluster <a name="GoogleEdgecontainerCluster" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: GoogleEdgecontainerClusterAuthorization,
  fleet: GoogleEdgecontainerClusterFleet,
  location: str,
  name: str,
  networking: GoogleEdgecontainerClusterNetworking,
  control_plane: GoogleEdgecontainerClusterControlPlane = None,
  control_plane_encryption: GoogleEdgecontainerClusterControlPlaneEncryption = None,
  default_max_pods_per_node: typing.Union[int, float] = None,
  external_load_balancer_ipv4_address_pools: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: GoogleEdgecontainerClusterMaintenancePolicy = None,
  project: str = None,
  release_channel: str = None,
  system_addons_config: GoogleEdgecontainerClusterSystemAddonsConfig = None,
  target_version: str = None,
  timeouts: GoogleEdgecontainerClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.controlPlaneEncryption">control_plane_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.defaultMaxPodsPerNode">default_max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.externalLoadBalancerIpv4AddressPools">external_load_balancer_ipv4_address_pools</a></code> | <code>typing.List[str]</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.releaseChannel">release_channel</a></code> | <code>str</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.systemAddonsConfig">system_addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.targetVersion">target_version</a></code> | <code>str</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#authorization GoogleEdgecontainerCluster#authorization}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#fleet GoogleEdgecontainerCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#location GoogleEdgecontainerCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.name"></a>

- *Type:* str

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#name GoogleEdgecontainerCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#networking GoogleEdgecontainerCluster#networking}

---

##### `control_plane`<sup>Optional</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.controlPlane"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#control_plane GoogleEdgecontainerCluster#control_plane}

---

##### `control_plane_encryption`<sup>Optional</sup> <a name="control_plane_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.controlPlaneEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#control_plane_encryption GoogleEdgecontainerCluster#control_plane_encryption}

---

##### `default_max_pods_per_node`<sup>Optional</sup> <a name="default_max_pods_per_node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.defaultMaxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#default_max_pods_per_node GoogleEdgecontainerCluster#default_max_pods_per_node}

---

##### `external_load_balancer_ipv4_address_pools`<sup>Optional</sup> <a name="external_load_balancer_ipv4_address_pools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.externalLoadBalancerIpv4AddressPools"></a>

- *Type:* typing.List[str]

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#external_load_balancer_ipv4_address_pools GoogleEdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#labels GoogleEdgecontainerCluster#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.maintenancePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#maintenance_policy GoogleEdgecontainerCluster#maintenance_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}.

---

##### `release_channel`<sup>Optional</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.releaseChannel"></a>

- *Type:* str

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#release_channel GoogleEdgecontainerCluster#release_channel}

---

##### `system_addons_config`<sup>Optional</sup> <a name="system_addons_config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.systemAddonsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#system_addons_config GoogleEdgecontainerCluster#system_addons_config}

---

##### `target_version`<sup>Optional</sup> <a name="target_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.targetVersion"></a>

- *Type:* str

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#target_version GoogleEdgecontainerCluster#target_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#timeouts GoogleEdgecontainerCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization">put_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane">put_control_plane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption">put_control_plane_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet">put_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy">put_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig">put_system_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane">reset_control_plane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption">reset_control_plane_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode">reset_default_max_pods_per_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">reset_external_load_balancer_ipv4_address_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy">reset_maintenance_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel">reset_release_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig">reset_system_addons_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion">reset_target_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorization` <a name="put_authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization"></a>

```python
def put_authorization(
  admin_users: GoogleEdgecontainerClusterAuthorizationAdminUsers
) -> None
```

###### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization.parameter.adminUsers"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#admin_users GoogleEdgecontainerCluster#admin_users}

---

##### `put_control_plane` <a name="put_control_plane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane"></a>

```python
def put_control_plane(
  local: GoogleEdgecontainerClusterControlPlaneLocal = None,
  remote: GoogleEdgecontainerClusterControlPlaneRemote = None
) -> None
```

###### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane.parameter.local"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#local GoogleEdgecontainerCluster#local}

---

###### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane.parameter.remote"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#remote GoogleEdgecontainerCluster#remote}

---

##### `put_control_plane_encryption` <a name="put_control_plane_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption"></a>

```python
def put_control_plane_encryption(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#kms_key GoogleEdgecontainerCluster#kms_key}

---

##### `put_fleet` <a name="put_fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet"></a>

```python
def put_fleet(
  project: str
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet.parameter.project"></a>

- *Type:* str

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}

---

##### `put_maintenance_policy` <a name="put_maintenance_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy"></a>

```python
def put_maintenance_policy(
  window: GoogleEdgecontainerClusterMaintenancePolicyWindow,
  maintenance_exclusions: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]] = None
) -> None
```

###### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy.parameter.window"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

###### `maintenance_exclusions`<sup>Optional</sup> <a name="maintenance_exclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy.parameter.maintenanceExclusions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#maintenance_exclusions GoogleEdgecontainerCluster#maintenance_exclusions}

---

##### `put_networking` <a name="put_networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking"></a>

```python
def put_networking(
  cluster_ipv4_cidr_blocks: typing.List[str],
  services_ipv4_cidr_blocks: typing.List[str],
  cluster_ipv6_cidr_blocks: typing.List[str] = None,
  services_ipv6_cidr_blocks: typing.List[str] = None
) -> None
```

###### `cluster_ipv4_cidr_blocks`<sup>Required</sup> <a name="cluster_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.clusterIpv4CidrBlocks"></a>

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#cluster_ipv4_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

###### `services_ipv4_cidr_blocks`<sup>Required</sup> <a name="services_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.servicesIpv4CidrBlocks"></a>

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#services_ipv4_cidr_blocks GoogleEdgecontainerCluster#services_ipv4_cidr_blocks}

---

###### `cluster_ipv6_cidr_blocks`<sup>Optional</sup> <a name="cluster_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.clusterIpv6CidrBlocks"></a>

- *Type:* typing.List[str]

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#cluster_ipv6_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

###### `services_ipv6_cidr_blocks`<sup>Optional</sup> <a name="services_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.servicesIpv6CidrBlocks"></a>

- *Type:* typing.List[str]

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#services_ipv6_cidr_blocks GoogleEdgecontainerCluster#services_ipv6_cidr_blocks}

---

##### `put_system_addons_config` <a name="put_system_addons_config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig"></a>

```python
def put_system_addons_config(
  ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngress = None
) -> None
```

###### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig.parameter.ingress"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#ingress GoogleEdgecontainerCluster#ingress}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}.

---

##### `reset_control_plane` <a name="reset_control_plane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane"></a>

```python
def reset_control_plane() -> None
```

##### `reset_control_plane_encryption` <a name="reset_control_plane_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption"></a>

```python
def reset_control_plane_encryption() -> None
```

##### `reset_default_max_pods_per_node` <a name="reset_default_max_pods_per_node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```python
def reset_default_max_pods_per_node() -> None
```

##### `reset_external_load_balancer_ipv4_address_pools` <a name="reset_external_load_balancer_ipv4_address_pools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```python
def reset_external_load_balancer_ipv4_address_pools() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maintenance_policy` <a name="reset_maintenance_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy"></a>

```python
def reset_maintenance_policy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_release_channel` <a name="reset_release_channel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel"></a>

```python
def reset_release_channel() -> None
```

##### `reset_system_addons_config` <a name="reset_system_addons_config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig"></a>

```python
def reset_system_addons_config() -> None
```

##### `reset_target_version` <a name="reset_target_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion"></a>

```python
def reset_target_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEdgecontainerCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEdgecontainerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption">control_plane_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion">control_plane_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents">maintenance_events</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion">node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig">system_addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput">authorization_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput">control_plane_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput">control_plane_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput">default_max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">external_load_balancer_ipv4_address_pools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput">fleet_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput">maintenance_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput">networking_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput">release_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput">system_addons_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput">target_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode">default_max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">external_load_balancer_ipv4_address_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel">release_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization"></a>

```python
authorization: GoogleEdgecontainerClusterAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a>

---

##### `cluster_ca_certificate`<sup>Required</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

---

##### `control_plane`<sup>Required</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane"></a>

```python
control_plane: GoogleEdgecontainerClusterControlPlaneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a>

---

##### `control_plane_encryption`<sup>Required</sup> <a name="control_plane_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption"></a>

```python
control_plane_encryption: GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `control_plane_version`<sup>Required</sup> <a name="control_plane_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion"></a>

```python
control_plane_version: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet"></a>

```python
fleet: GoogleEdgecontainerClusterFleetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a>

---

##### `maintenance_events`<sup>Required</sup> <a name="maintenance_events" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents"></a>

```python
maintenance_events: GoogleEdgecontainerClusterMaintenanceEventsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a>

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleEdgecontainerClusterMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking"></a>

```python
networking: GoogleEdgecontainerClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a>

---

##### `node_version`<sup>Required</sup> <a name="node_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_addons_config`<sup>Required</sup> <a name="system_addons_config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig"></a>

```python
system_addons_config: GoogleEdgecontainerClusterSystemAddonsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts"></a>

```python
timeouts: GoogleEdgecontainerClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput"></a>

```python
authorization_input: GoogleEdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---

##### `control_plane_encryption_input`<sup>Optional</sup> <a name="control_plane_encryption_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```python
control_plane_encryption_input: GoogleEdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---

##### `control_plane_input`<sup>Optional</sup> <a name="control_plane_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput"></a>

```python
control_plane_input: GoogleEdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---

##### `default_max_pods_per_node_input`<sup>Optional</sup> <a name="default_max_pods_per_node_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```python
default_max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_load_balancer_ipv4_address_pools_input`<sup>Optional</sup> <a name="external_load_balancer_ipv4_address_pools_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```python
external_load_balancer_ipv4_address_pools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput"></a>

```python
fleet_input: GoogleEdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_policy_input`<sup>Optional</sup> <a name="maintenance_policy_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput"></a>

```python
maintenance_policy_input: GoogleEdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput"></a>

```python
networking_input: GoogleEdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `release_channel_input`<sup>Optional</sup> <a name="release_channel_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput"></a>

```python
release_channel_input: str
```

- *Type:* str

---

##### `system_addons_config_input`<sup>Optional</sup> <a name="system_addons_config_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput"></a>

```python
system_addons_config_input: GoogleEdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---

##### `target_version_input`<sup>Optional</sup> <a name="target_version_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput"></a>

```python
target_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEdgecontainerClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>]

---

##### `default_max_pods_per_node`<sup>Required</sup> <a name="default_max_pods_per_node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```python
default_max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_load_balancer_ipv4_address_pools`<sup>Required</sup> <a name="external_load_balancer_ipv4_address_pools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```python
external_load_balancer_ipv4_address_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `release_channel`<sup>Required</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel"></a>

```python
release_channel: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerClusterAuthorization <a name="GoogleEdgecontainerClusterAuthorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization(
  admin_users: GoogleEdgecontainerClusterAuthorizationAdminUsers
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers">admin_users</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers"></a>

```python
admin_users: GoogleEdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#admin_users GoogleEdgecontainerCluster#admin_users}

---

### GoogleEdgecontainerClusterAuthorizationAdminUsers <a name="GoogleEdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers(
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>str</code> | An active Google username. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```python
username: str
```

- *Type:* str

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#username GoogleEdgecontainerCluster#username}

---

### GoogleEdgecontainerClusterConfig <a name="GoogleEdgecontainerClusterConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: GoogleEdgecontainerClusterAuthorization,
  fleet: GoogleEdgecontainerClusterFleet,
  location: str,
  name: str,
  networking: GoogleEdgecontainerClusterNetworking,
  control_plane: GoogleEdgecontainerClusterControlPlane = None,
  control_plane_encryption: GoogleEdgecontainerClusterControlPlaneEncryption = None,
  default_max_pods_per_node: typing.Union[int, float] = None,
  external_load_balancer_ipv4_address_pools: typing.List[str] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  maintenance_policy: GoogleEdgecontainerClusterMaintenancePolicy = None,
  project: str = None,
  release_channel: str = None,
  system_addons_config: GoogleEdgecontainerClusterSystemAddonsConfig = None,
  target_version: str = None,
  timeouts: GoogleEdgecontainerClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name">name</a></code> | <code>str</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane">control_plane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption">control_plane_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode">default_max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">external_load_balancer_ipv4_address_pools</a></code> | <code>typing.List[str]</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel">release_channel</a></code> | <code>str</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig">system_addons_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion">target_version</a></code> | <code>str</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization"></a>

```python
authorization: GoogleEdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#authorization GoogleEdgecontainerCluster#authorization}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet"></a>

```python
fleet: GoogleEdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#fleet GoogleEdgecontainerCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#location GoogleEdgecontainerCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#name GoogleEdgecontainerCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking"></a>

```python
networking: GoogleEdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#networking GoogleEdgecontainerCluster#networking}

---

##### `control_plane`<sup>Optional</sup> <a name="control_plane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane"></a>

```python
control_plane: GoogleEdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#control_plane GoogleEdgecontainerCluster#control_plane}

---

##### `control_plane_encryption`<sup>Optional</sup> <a name="control_plane_encryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```python
control_plane_encryption: GoogleEdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#control_plane_encryption GoogleEdgecontainerCluster#control_plane_encryption}

---

##### `default_max_pods_per_node`<sup>Optional</sup> <a name="default_max_pods_per_node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```python
default_max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#default_max_pods_per_node GoogleEdgecontainerCluster#default_max_pods_per_node}

---

##### `external_load_balancer_ipv4_address_pools`<sup>Optional</sup> <a name="external_load_balancer_ipv4_address_pools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```python
external_load_balancer_ipv4_address_pools: typing.List[str]
```

- *Type:* typing.List[str]

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#external_load_balancer_ipv4_address_pools GoogleEdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#labels GoogleEdgecontainerCluster#labels}

---

##### `maintenance_policy`<sup>Optional</sup> <a name="maintenance_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy"></a>

```python
maintenance_policy: GoogleEdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#maintenance_policy GoogleEdgecontainerCluster#maintenance_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}.

---

##### `release_channel`<sup>Optional</sup> <a name="release_channel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel"></a>

```python
release_channel: str
```

- *Type:* str

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#release_channel GoogleEdgecontainerCluster#release_channel}

---

##### `system_addons_config`<sup>Optional</sup> <a name="system_addons_config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```python
system_addons_config: GoogleEdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#system_addons_config GoogleEdgecontainerCluster#system_addons_config}

---

##### `target_version`<sup>Optional</sup> <a name="target_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#target_version GoogleEdgecontainerCluster#target_version}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleEdgecontainerClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#timeouts GoogleEdgecontainerCluster#timeouts}

---

### GoogleEdgecontainerClusterControlPlane <a name="GoogleEdgecontainerClusterControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane(
  local: GoogleEdgecontainerClusterControlPlaneLocal = None,
  remote: GoogleEdgecontainerClusterControlPlaneRemote = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local">local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local"></a>

```python
local: GoogleEdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#local GoogleEdgecontainerCluster#local}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote"></a>

```python
remote: GoogleEdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#remote GoogleEdgecontainerCluster#remote}

---

### GoogleEdgecontainerClusterControlPlaneEncryption <a name="GoogleEdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#kms_key GoogleEdgecontainerCluster#kms_key}

---

### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus()
```


### GoogleEdgecontainerClusterControlPlaneLocal <a name="GoogleEdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal(
  machine_filter: str = None,
  node_count: typing.Union[int, float] = None,
  node_location: str = None,
  shared_deployment_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter">machine_filter</a></code> | <code>str</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">shared_deployment_policy</a></code> | <code>str</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#machine_filter GoogleEdgecontainerCluster#machine_filter}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_count GoogleEdgecontainerCluster#node_count}

---

##### `node_location`<sup>Optional</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

##### `shared_deployment_policy`<sup>Optional</sup> <a name="shared_deployment_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```python
shared_deployment_policy: str
```

- *Type:* str

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#shared_deployment_policy GoogleEdgecontainerCluster#shared_deployment_policy}

---

### GoogleEdgecontainerClusterControlPlaneRemote <a name="GoogleEdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote(
  node_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `node_location`<sup>Optional</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

### GoogleEdgecontainerClusterFleet <a name="GoogleEdgecontainerClusterFleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet(
  project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project">project</a></code> | <code>str</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}

---

### GoogleEdgecontainerClusterMaintenanceEvents <a name="GoogleEdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents()
```


### GoogleEdgecontainerClusterMaintenancePolicy <a name="GoogleEdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy(
  window: GoogleEdgecontainerClusterMaintenancePolicyWindow,
  maintenance_exclusions: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions">maintenance_exclusions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]</code> | maintenance_exclusions block. |

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

##### `maintenance_exclusions`<sup>Optional</sup> <a name="maintenance_exclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions"></a>

```python
maintenance_exclusions: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#maintenance_exclusions GoogleEdgecontainerCluster#maintenance_exclusions}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions(
  id: str = None,
  window: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id">id</a></code> | <code>str</code> | A unique (per cluster) id for the window. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | window block. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id"></a>

```python
id: str
```

- *Type:* str

A unique (per cluster) id for the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime">end_time</a></code> | <code>str</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime">start_time</a></code> | <code>str</code> | The time that the window first starts. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow(
  recurring_window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">recurring_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `recurring_window`<sup>Required</sup> <a name="recurring_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```python
recurring_window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#recurring_window GoogleEdgecontainerCluster#recurring_window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow(
  recurrence: str = None,
  window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">recurrence</a></code> | <code>str</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#recurrence GoogleEdgecontainerCluster#recurrence}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow(
  end_time: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">end_time</a></code> | <code>str</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">start_time</a></code> | <code>str</code> | The time that the window first starts. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterNetworking <a name="GoogleEdgecontainerClusterNetworking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking(
  cluster_ipv4_cidr_blocks: typing.List[str],
  services_ipv4_cidr_blocks: typing.List[str],
  cluster_ipv6_cidr_blocks: typing.List[str] = None,
  services_ipv6_cidr_blocks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">cluster_ipv4_cidr_blocks</a></code> | <code>typing.List[str]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">services_ipv4_cidr_blocks</a></code> | <code>typing.List[str]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">cluster_ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">services_ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `cluster_ipv4_cidr_blocks`<sup>Required</sup> <a name="cluster_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```python
cluster_ipv4_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#cluster_ipv4_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `services_ipv4_cidr_blocks`<sup>Required</sup> <a name="services_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```python
services_ipv4_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#services_ipv4_cidr_blocks GoogleEdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `cluster_ipv6_cidr_blocks`<sup>Optional</sup> <a name="cluster_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```python
cluster_ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#cluster_ipv6_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `services_ipv6_cidr_blocks`<sup>Optional</sup> <a name="services_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```python
services_ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#services_ipv6_cidr_blocks GoogleEdgecontainerCluster#services_ipv6_cidr_blocks}

---

### GoogleEdgecontainerClusterSystemAddonsConfig <a name="GoogleEdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig(
  ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```python
ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#ingress GoogleEdgecontainerCluster#ingress}

---

### GoogleEdgecontainerClusterSystemAddonsConfigIngress <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress(
  disabled: typing.Union[bool, IResolvable] = None,
  ipv4_vip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">ipv4_vip</a></code> | <code>str</code> | Ingress VIP. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#disabled GoogleEdgecontainerCluster#disabled}

---

##### `ipv4_vip`<sup>Optional</sup> <a name="ipv4_vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```python
ipv4_vip: str
```

- *Type:* str

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#ipv4_vip GoogleEdgecontainerCluster#ipv4_vip}

---

### GoogleEdgecontainerClusterTimeouts <a name="GoogleEdgecontainerClusterTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---


### GoogleEdgecontainerClusterAuthorizationOutputReference <a name="GoogleEdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers">put_admin_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_admin_users` <a name="put_admin_users" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```python
def put_admin_users(
  username: str
) -> None
```

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.username"></a>

- *Type:* str

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#username GoogleEdgecontainerCluster#username}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers">admin_users</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```python
admin_users: GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: GoogleEdgecontainerClusterAuthorizationAdminUsers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterAuthorization
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">kms_key_active_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">kms_key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">kms_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_active_version`<sup>Required</sup> <a name="kms_key_active_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```python
kms_key_active_version: str
```

- *Type:* str

---

##### `kms_key_state`<sup>Required</sup> <a name="kms_key_state" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```python
kms_key_state: str
```

- *Type:* str

---

##### `kms_status`<sup>Required</sup> <a name="kms_status" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```python
kms_status: GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterControlPlaneEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---


### GoogleEdgecontainerClusterControlPlaneLocalOutputReference <a name="GoogleEdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">reset_machine_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">reset_node_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">reset_shared_deployment_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_machine_filter` <a name="reset_machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```python
def reset_machine_filter() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_node_location` <a name="reset_node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```python
def reset_node_location() -> None
```

##### `reset_shared_deployment_policy` <a name="reset_shared_deployment_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```python
def reset_shared_deployment_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">machine_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">node_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">shared_deployment_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">machine_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">node_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">shared_deployment_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `machine_filter_input`<sup>Optional</sup> <a name="machine_filter_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```python
machine_filter_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location_input`<sup>Optional</sup> <a name="node_location_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```python
node_location_input: str
```

- *Type:* str

---

##### `shared_deployment_policy_input`<sup>Optional</sup> <a name="shared_deployment_policy_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```python
shared_deployment_policy_input: str
```

- *Type:* str

---

##### `machine_filter`<sup>Required</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

---

##### `shared_deployment_policy`<sup>Required</sup> <a name="shared_deployment_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```python
shared_deployment_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---


### GoogleEdgecontainerClusterControlPlaneOutputReference <a name="GoogleEdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal">put_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote">put_remote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote">reset_remote</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_local` <a name="put_local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```python
def put_local(
  machine_filter: str = None,
  node_count: typing.Union[int, float] = None,
  node_location: str = None,
  shared_deployment_policy: str = None
) -> None
```

###### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.machineFilter"></a>

- *Type:* str

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#machine_filter GoogleEdgecontainerCluster#machine_filter}

---

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_count GoogleEdgecontainerCluster#node_count}

---

###### `node_location`<sup>Optional</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.nodeLocation"></a>

- *Type:* str

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

###### `shared_deployment_policy`<sup>Optional</sup> <a name="shared_deployment_policy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.sharedDeploymentPolicy"></a>

- *Type:* str

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#shared_deployment_policy GoogleEdgecontainerCluster#shared_deployment_policy}

---

##### `put_remote` <a name="put_remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```python
def put_remote(
  node_location: str = None
) -> None
```

###### `node_location`<sup>Optional</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.nodeLocation"></a>

- *Type:* str

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

##### `reset_local` <a name="reset_local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_remote` <a name="reset_remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```python
def reset_remote() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput">local_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput">remote_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```python
local: GoogleEdgecontainerClusterControlPlaneLocalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```python
remote: GoogleEdgecontainerClusterControlPlaneRemoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```python
local_input: GoogleEdgecontainerClusterControlPlaneLocal
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---

##### `remote_input`<sup>Optional</sup> <a name="remote_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```python
remote_input: GoogleEdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterControlPlane
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---


### GoogleEdgecontainerClusterControlPlaneRemoteOutputReference <a name="GoogleEdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">reset_node_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_location` <a name="reset_node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```python
def reset_node_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">node_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">node_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_location_input`<sup>Optional</sup> <a name="node_location_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```python
node_location_input: str
```

- *Type:* str

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterControlPlaneRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---


### GoogleEdgecontainerClusterFleetOutputReference <a name="GoogleEdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterFleet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---


### GoogleEdgecontainerClusterMaintenanceEventsList <a name="GoogleEdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEdgecontainerClusterMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleEdgecontainerClusterMaintenanceEventsOutputReference <a name="GoogleEdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenanceEvents
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow">put_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow">reset_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window` <a name="put_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow"></a>

```python
def put_window(
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.endTime"></a>

- *Type:* str

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.startTime"></a>

- *Type:* str

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_window` <a name="reset_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow"></a>

```python
def reset_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput">window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput"></a>

```python
window_input: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions">put_maintenance_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow">put_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions">reset_maintenance_exclusions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_exclusions` <a name="put_maintenance_exclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions"></a>

```python
def put_maintenance_exclusions(
  value: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]

---

##### `put_window` <a name="put_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```python
def put_window(
  recurring_window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow
) -> None
```

###### `recurring_window`<sup>Required</sup> <a name="recurring_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.recurringWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#recurring_window GoogleEdgecontainerCluster#recurring_window}

---

##### `reset_maintenance_exclusions` <a name="reset_maintenance_exclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions"></a>

```python
def reset_maintenance_exclusions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions">maintenance_exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput">maintenance_exclusions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_exclusions`<sup>Required</sup> <a name="maintenance_exclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions"></a>

```python
maintenance_exclusions: GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a>

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `maintenance_exclusions_input`<sup>Optional</sup> <a name="maintenance_exclusions_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput"></a>

```python
maintenance_exclusions_input: typing.Union[IResolvable, typing.List[GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions</a>]]

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```python
window_input: GoogleEdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenancePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">put_recurring_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurring_window` <a name="put_recurring_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```python
def put_recurring_window(
  recurrence: str = None,
  window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow = None
) -> None
```

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.recurrence"></a>

- *Type:* str

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#recurrence GoogleEdgecontainerCluster#recurrence}

---

###### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.window"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">recurring_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">recurring_window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurring_window`<sup>Required</sup> <a name="recurring_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```python
recurring_window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `recurring_window_input`<sup>Optional</sup> <a name="recurring_window_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```python
recurring_window_input: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenancePolicyWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">put_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">reset_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_window` <a name="put_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```python
def put_window(
  end_time: str = None,
  start_time: str = None
) -> None
```

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.endTime"></a>

- *Type:* str

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.startTime"></a>

- *Type:* str

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_window` <a name="reset_window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```python
def reset_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```python
window: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: str
```

- *Type:* str

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```python
window_input: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```python
recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### GoogleEdgecontainerClusterNetworkingOutputReference <a name="GoogleEdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">reset_cluster_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">reset_services_ipv6_cidr_blocks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_ipv6_cidr_blocks` <a name="reset_cluster_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```python
def reset_cluster_ipv6_cidr_blocks() -> None
```

##### `reset_services_ipv6_cidr_blocks` <a name="reset_services_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```python
def reset_services_ipv6_cidr_blocks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">cluster_ipv4_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">cluster_ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">services_ipv4_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">services_ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">cluster_ipv4_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">cluster_ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">services_ipv4_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">services_ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `cluster_ipv4_cidr_blocks_input`<sup>Optional</sup> <a name="cluster_ipv4_cidr_blocks_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```python
cluster_ipv4_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="cluster_ipv6_cidr_blocks_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```python
cluster_ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_ipv4_cidr_blocks_input`<sup>Optional</sup> <a name="services_ipv4_cidr_blocks_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```python
services_ipv4_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="services_ipv6_cidr_blocks_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```python
services_ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_ipv4_cidr_blocks`<sup>Required</sup> <a name="cluster_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```python
cluster_ipv4_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_ipv6_cidr_blocks`<sup>Required</sup> <a name="cluster_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```python
cluster_ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_ipv4_cidr_blocks`<sup>Required</sup> <a name="services_ipv4_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```python
services_ipv4_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_ipv6_cidr_blocks`<sup>Required</sup> <a name="services_ipv6_cidr_blocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```python
services_ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterNetworking
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">reset_ipv4_vip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_ipv4_vip` <a name="reset_ipv4_vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```python
def reset_ipv4_vip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">ipv4_vip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">ipv4_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_vip_input`<sup>Optional</sup> <a name="ipv4_vip_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```python
ipv4_vip_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv4_vip`<sup>Required</sup> <a name="ipv4_vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```python
ipv4_vip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">reset_ingress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```python
def put_ingress(
  disabled: typing.Union[bool, IResolvable] = None,
  ipv4_vip: str = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#disabled GoogleEdgecontainerCluster#disabled}

---

###### `ipv4_vip`<sup>Optional</sup> <a name="ipv4_vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.ipv4Vip"></a>

- *Type:* str

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_edgecontainer_cluster#ipv4_vip GoogleEdgecontainerCluster#ipv4_vip}

---

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```python
def reset_ingress() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">ingress_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```python
ingress: GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```python
ingress_input: GoogleEdgecontainerClusterSystemAddonsConfigIngress
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEdgecontainerClusterSystemAddonsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---


### GoogleEdgecontainerClusterTimeoutsOutputReference <a name="GoogleEdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_edgecontainer_cluster

googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEdgecontainerClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>]

---



