# `googleContainerAzureNodePool` Submodule <a name="`googleContainerAzureNodePool` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureNodePool <a name="GoogleContainerAzureNodePool" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool google_container_azure_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling: GoogleContainerAzureNodePoolAutoscaling,
  cluster: str,
  config: GoogleContainerAzureNodePoolConfigA,
  location: str,
  max_pods_constraint: GoogleContainerAzureNodePoolMaxPodsConstraint,
  name: str,
  subnet_id: str,
  version: str,
  annotations: typing.Mapping[str] = None,
  azure_availability_zone: str = None,
  id: str = None,
  management: GoogleContainerAzureNodePoolManagement = None,
  project: str = None,
  timeouts: GoogleContainerAzureNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.version">version</a></code> | <code>str</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone">azure_availability_zone</a></code> | <code>str</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.maxPodsConstraint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.subnetId"></a>

- *Type:* str

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.version"></a>

- *Type:* str

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `azure_availability_zone`<sup>Optional</sup> <a name="azure_availability_zone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.azureAvailabilityZone"></a>

- *Type:* str

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling">put_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement">put_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint">put_max_pods_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone">reset_azure_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling` <a name="put_autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling"></a>

```python
def put_autoscaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_node_count GoogleContainerAzureNodePool#max_node_count}

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putAutoscaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#min_node_count GoogleContainerAzureNodePool#min_node_count}

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig"></a>

```python
def put_config(
  ssh_config: GoogleContainerAzureNodePoolConfigSshConfig,
  image_type: str = None,
  labels: typing.Mapping[str] = None,
  proxy_config: GoogleContainerAzureNodePoolConfigProxyConfig = None,
  root_volume: GoogleContainerAzureNodePoolConfigRootVolume = None,
  tags: typing.Mapping[str] = None,
  vm_size: str = None
) -> None
```

###### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.sshConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#ssh_config GoogleContainerAzureNodePool#ssh_config}

---

###### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.imageType"></a>

- *Type:* str

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#image_type GoogleContainerAzureNodePool#image_type}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#labels GoogleContainerAzureNodePool#labels}

---

###### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#proxy_config GoogleContainerAzureNodePool#proxy_config}

---

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#root_volume GoogleContainerAzureNodePool#root_volume}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#tags GoogleContainerAzureNodePool#tags}

---

###### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putConfig.parameter.vmSize"></a>

- *Type:* str

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#vm_size GoogleContainerAzureNodePool#vm_size}

---

##### `put_management` <a name="put_management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement"></a>

```python
def put_management(
  auto_repair: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putManagement.parameter.autoRepair"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#auto_repair GoogleContainerAzureNodePool#auto_repair}

---

##### `put_max_pods_constraint` <a name="put_max_pods_constraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint"></a>

```python
def put_max_pods_constraint(
  max_pods_per_node: typing.Union[int, float]
) -> None
```

###### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putMaxPodsConstraint.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_pods_per_node GoogleContainerAzureNodePool#max_pods_per_node}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_azure_availability_zone` <a name="reset_azure_availability_zone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetAzureAvailabilityZone"></a>

```python
def reset_azure_availability_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContainerAzureNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContainerAzureNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContainerAzureNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput">autoscaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput">azure_availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput">management_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput">max_pods_constraint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone">azure_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscaling"></a>

```python
autoscaling: GoogleContainerAzureNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference">GoogleContainerAzureNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.config"></a>

```python
config: GoogleContainerAzureNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference">GoogleContainerAzureNodePoolConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.management"></a>

```python
management: GoogleContainerAzureNodePoolManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference">GoogleContainerAzureNodePoolManagementOutputReference</a>

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraint"></a>

```python
max_pods_constraint: GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference">GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeouts"></a>

```python
timeouts: GoogleContainerAzureNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference">GoogleContainerAzureNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `autoscaling_input`<sup>Optional</sup> <a name="autoscaling_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.autoscalingInput"></a>

```python
autoscaling_input: GoogleContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---

##### `azure_availability_zone_input`<sup>Optional</sup> <a name="azure_availability_zone_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZoneInput"></a>

```python
azure_availability_zone_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.configInput"></a>

```python
config_input: GoogleContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.managementInput"></a>

```python
management_input: GoogleContainerAzureNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---

##### `max_pods_constraint_input`<sup>Optional</sup> <a name="max_pods_constraint_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.maxPodsConstraintInput"></a>

```python
max_pods_constraint_input: GoogleContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerAzureNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `azure_availability_zone`<sup>Required</sup> <a name="azure_availability_zone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.azureAvailabilityZone"></a>

```python
azure_availability_zone: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureNodePoolAutoscaling <a name="GoogleContainerAzureNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes in the node pool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes in the node pool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_node_count GoogleContainerAzureNodePool#max_node_count}

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#min_node_count GoogleContainerAzureNodePool#min_node_count}

---

### GoogleContainerAzureNodePoolConfig <a name="GoogleContainerAzureNodePoolConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling: GoogleContainerAzureNodePoolAutoscaling,
  cluster: str,
  config: GoogleContainerAzureNodePoolConfigA,
  location: str,
  max_pods_constraint: GoogleContainerAzureNodePoolMaxPodsConstraint,
  name: str,
  subnet_id: str,
  version: str,
  annotations: typing.Mapping[str] = None,
  azure_availability_zone: str = None,
  id: str = None,
  management: GoogleContainerAzureNodePoolManagement = None,
  project: str = None,
  timeouts: GoogleContainerAzureNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The azureCluster for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ARM ID of the subnet where the node pool VMs run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version">version</a></code> | <code>str</code> | The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone">azure_availability_zone</a></code> | <code>str</code> | Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.autoscaling"></a>

```python
autoscaling: GoogleContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#autoscaling GoogleContainerAzureNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The azureCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#cluster GoogleContainerAzureNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.config"></a>

```python
config: GoogleContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#config GoogleContainerAzureNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#location GoogleContainerAzureNodePool#location}

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.maxPodsConstraint"></a>

```python
max_pods_constraint: GoogleContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_pods_constraint GoogleContainerAzureNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#name GoogleContainerAzureNodePool#name}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ARM ID of the subnet where the node pool VMs run.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#subnet_id GoogleContainerAzureNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#version GoogleContainerAzureNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#annotations GoogleContainerAzureNodePool#annotations}

---

##### `azure_availability_zone`<sup>Optional</sup> <a name="azure_availability_zone" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.azureAvailabilityZone"></a>

```python
azure_availability_zone: str
```

- *Type:* str

Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#azure_availability_zone GoogleContainerAzureNodePool#azure_availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#id GoogleContainerAzureNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.management"></a>

```python
management: GoogleContainerAzureNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#management GoogleContainerAzureNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#project GoogleContainerAzureNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerAzureNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#timeouts GoogleContainerAzureNodePool#timeouts}

---

### GoogleContainerAzureNodePoolConfigA <a name="GoogleContainerAzureNodePoolConfigA" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA(
  ssh_config: GoogleContainerAzureNodePoolConfigSshConfig,
  image_type: str = None,
  labels: typing.Mapping[str] = None,
  proxy_config: GoogleContainerAzureNodePoolConfigProxyConfig = None,
  root_volume: GoogleContainerAzureNodePoolConfigRootVolume = None,
  tags: typing.Mapping[str] = None,
  vm_size: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType">image_type</a></code> | <code>str</code> | The OS image type to use on node pool instances. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize">vm_size</a></code> | <code>str</code> | Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`. |

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.sshConfig"></a>

```python
ssh_config: GoogleContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#ssh_config GoogleContainerAzureNodePool#ssh_config}

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

The OS image type to use on node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#image_type GoogleContainerAzureNodePool#image_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#labels GoogleContainerAzureNodePool#labels}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#proxy_config GoogleContainerAzureNodePool#proxy_config}

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.rootVolume"></a>

```python
root_volume: GoogleContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#root_volume GoogleContainerAzureNodePool#root_volume}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#tags GoogleContainerAzureNodePool#tags}

---

##### `vm_size`<sup>Optional</sup> <a name="vm_size" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#vm_size GoogleContainerAzureNodePool#vm_size}

---

### GoogleContainerAzureNodePoolConfigProxyConfig <a name="GoogleContainerAzureNodePoolConfigProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig(
  resource_group_id: str,
  secret_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId">secret_id</a></code> | <code>str</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#resource_group_id GoogleContainerAzureNodePool#resource_group_id}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#secret_id GoogleContainerAzureNodePool#secret_id}

---

### GoogleContainerAzureNodePoolConfigRootVolume <a name="GoogleContainerAzureNodePoolConfigRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume(
  size_gib: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#size_gib GoogleContainerAzureNodePool#size_gib}

---

### GoogleContainerAzureNodePoolConfigSshConfig <a name="GoogleContainerAzureNodePoolConfigSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig(
  authorized_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey">authorized_key</a></code> | <code>str</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig.property.authorizedKey"></a>

```python
authorized_key: str
```

- *Type:* str

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#authorized_key GoogleContainerAzureNodePool#authorized_key}

---

### GoogleContainerAzureNodePoolManagement <a name="GoogleContainerAzureNodePoolManagement" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement(
  auto_repair: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#auto_repair GoogleContainerAzureNodePool#auto_repair}

---

### GoogleContainerAzureNodePoolMaxPodsConstraint <a name="GoogleContainerAzureNodePoolMaxPodsConstraint" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint(
  max_pods_per_node: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods to schedule on a single node. |

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#max_pods_per_node GoogleContainerAzureNodePool#max_pods_per_node}

---

### GoogleContainerAzureNodePoolTimeouts <a name="GoogleContainerAzureNodePoolTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#create GoogleContainerAzureNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#delete GoogleContainerAzureNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#update GoogleContainerAzureNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureNodePoolAutoscalingOutputReference <a name="GoogleContainerAzureNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolAutoscaling">GoogleContainerAzureNodePoolAutoscaling</a>

---


### GoogleContainerAzureNodePoolConfigAOutputReference <a name="GoogleContainerAzureNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig">put_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize">reset_vm_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig"></a>

```python
def put_proxy_config(
  resource_group_id: str,
  secret_id: str
) -> None
```

###### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.resourceGroupId"></a>

- *Type:* str

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#resource_group_id GoogleContainerAzureNodePool#resource_group_id}

---

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putProxyConfig.parameter.secretId"></a>

- *Type:* str

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#secret_id GoogleContainerAzureNodePool#secret_id}

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume"></a>

```python
def put_root_volume(
  size_gib: typing.Union[int, float] = None
) -> None
```

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putRootVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#size_gib GoogleContainerAzureNodePool#size_gib}

---

##### `put_ssh_config` <a name="put_ssh_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig"></a>

```python
def put_ssh_config(
  authorized_key: str
) -> None
```

###### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.putSshConfig.parameter.authorizedKey"></a>

- *Type:* str

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_azure_node_pool#authorized_key GoogleContainerAzureNodePool#authorized_key}

---

##### `reset_image_type` <a name="reset_image_type" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vm_size` <a name="reset_vm_size" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.resetVmSize"></a>

```python
def reset_vm_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput">ssh_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput">vm_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize">vm_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfig"></a>

```python
proxy_config: GoogleContainerAzureNodePoolConfigProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference">GoogleContainerAzureNodePoolConfigProxyConfigOutputReference</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolume"></a>

```python
root_volume: GoogleContainerAzureNodePoolConfigRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference">GoogleContainerAzureNodePoolConfigRootVolumeOutputReference</a>

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfig"></a>

```python
ssh_config: GoogleContainerAzureNodePoolConfigSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference">GoogleContainerAzureNodePoolConfigSshConfigOutputReference</a>

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```python
proxy_config_input: GoogleContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: GoogleContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---

##### `ssh_config_input`<sup>Optional</sup> <a name="ssh_config_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```python
ssh_config_input: GoogleContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vm_size_input`<sup>Optional</sup> <a name="vm_size_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSizeInput"></a>

```python
vm_size_input: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vm_size`<sup>Required</sup> <a name="vm_size" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.vmSize"></a>

```python
vm_size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigA">GoogleContainerAzureNodePoolConfigA</a>

---


### GoogleContainerAzureNodePoolConfigProxyConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigProxyConfig">GoogleContainerAzureNodePoolConfigProxyConfig</a>

---


### GoogleContainerAzureNodePoolConfigRootVolumeOutputReference <a name="GoogleContainerAzureNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigRootVolume">GoogleContainerAzureNodePoolConfigRootVolume</a>

---


### GoogleContainerAzureNodePoolConfigSshConfigOutputReference <a name="GoogleContainerAzureNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput">authorized_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey">authorized_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_key_input`<sup>Optional</sup> <a name="authorized_key_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKeyInput"></a>

```python
authorized_key_input: str
```

- *Type:* str

---

##### `authorized_key`<sup>Required</sup> <a name="authorized_key" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.authorizedKey"></a>

```python
authorized_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolConfigSshConfig">GoogleContainerAzureNodePoolConfigSshConfig</a>

---


### GoogleContainerAzureNodePoolManagementOutputReference <a name="GoogleContainerAzureNodePoolManagementOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair">reset_auto_repair</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_repair` <a name="reset_auto_repair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.resetAutoRepair"></a>

```python
def reset_auto_repair() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput">auto_repair_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_repair_input`<sup>Optional</sup> <a name="auto_repair_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepairInput"></a>

```python
auto_repair_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_repair`<sup>Required</sup> <a name="auto_repair" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagementOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolManagement">GoogleContainerAzureNodePoolManagement</a>

---


### GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference <a name="GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAzureNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolMaxPodsConstraint">GoogleContainerAzureNodePoolMaxPodsConstraint</a>

---


### GoogleContainerAzureNodePoolTimeoutsOutputReference <a name="GoogleContainerAzureNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_azure_node_pool

googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAzureNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAzureNodePool.GoogleContainerAzureNodePoolTimeouts">GoogleContainerAzureNodePoolTimeouts</a>]

---



