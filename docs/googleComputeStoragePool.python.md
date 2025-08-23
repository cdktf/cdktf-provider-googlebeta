# `googleComputeStoragePool` Submodule <a name="`googleComputeStoragePool` Submodule" id="@cdktf/provider-google-beta.googleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeStoragePool <a name="GoogleComputeStoragePool" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  pool_provisioned_capacity_gb: str,
  pool_provisioned_throughput: str,
  storage_pool_type: str,
  capacity_provisioning_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  labels: typing.Mapping[str] = None,
  performance_provisioning_type: str = None,
  pool_provisioned_iops: str = None,
  project: str = None,
  timeouts: GoogleComputeStoragePoolTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the storage pool resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb"></a>

- *Type:* str

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedThroughput"></a>

- *Type:* str

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.storagePoolType"></a>

- *Type:* str

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `capacity_provisioning_type`<sup>Optional</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.capacityProvisioningType"></a>

- *Type:* str

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}

---

##### `performance_provisioning_type`<sup>Optional</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.performanceProvisioningType"></a>

- *Type:* str

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `pool_provisioned_iops`<sup>Optional</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.poolProvisionedIops"></a>

- *Type:* str

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType">reset_capacity_provisioning_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType">reset_performance_provisioning_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops">reset_pool_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}.

---

##### `reset_capacity_provisioning_type` <a name="reset_capacity_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType"></a>

```python
def reset_capacity_provisioning_type() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_performance_provisioning_type` <a name="reset_performance_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType"></a>

```python
def reset_performance_provisioning_type() -> None
```

##### `reset_pool_provisioned_iops` <a name="reset_pool_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops"></a>

```python
def reset_pool_provisioned_iops() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeStoragePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus">resource_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput">capacity_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput">performance_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput">pool_provisioned_capacity_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput">pool_provisioned_iops_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput">pool_provisioned_throughput_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput">storage_pool_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `resource_status`<sup>Required</sup> <a name="resource_status" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus"></a>

```python
resource_status: GoogleComputeStoragePoolResourceStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status"></a>

```python
status: GoogleComputeStoragePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts"></a>

```python
timeouts: GoogleComputeStoragePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a>

---

##### `capacity_provisioning_type_input`<sup>Optional</sup> <a name="capacity_provisioning_type_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```python
capacity_provisioning_type_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `performance_provisioning_type_input`<sup>Optional</sup> <a name="performance_provisioning_type_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```python
performance_provisioning_type_input: str
```

- *Type:* str

---

##### `pool_provisioned_capacity_gb_input`<sup>Optional</sup> <a name="pool_provisioned_capacity_gb_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```python
pool_provisioned_capacity_gb_input: str
```

- *Type:* str

---

##### `pool_provisioned_iops_input`<sup>Optional</sup> <a name="pool_provisioned_iops_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput"></a>

```python
pool_provisioned_iops_input: str
```

- *Type:* str

---

##### `pool_provisioned_throughput_input`<sup>Optional</sup> <a name="pool_provisioned_throughput_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```python
pool_provisioned_throughput_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_pool_type_input`<sup>Optional</sup> <a name="storage_pool_type_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput"></a>

```python
storage_pool_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `capacity_provisioning_type`<sup>Required</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType"></a>

```python
capacity_provisioning_type: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `performance_provisioning_type`<sup>Required</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType"></a>

```python
performance_provisioning_type: str
```

- *Type:* str

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```python
pool_provisioned_capacity_gb: str
```

- *Type:* str

---

##### `pool_provisioned_iops`<sup>Required</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops"></a>

```python
pool_provisioned_iops: str
```

- *Type:* str

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```python
pool_provisioned_throughput: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeStoragePoolConfig <a name="GoogleComputeStoragePoolConfig" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  pool_provisioned_capacity_gb: str,
  pool_provisioned_throughput: str,
  storage_pool_type: str,
  capacity_provisioning_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  labels: typing.Mapping[str] = None,
  performance_provisioning_type: str = None,
  pool_provisioned_iops: str = None,
  project: str = None,
  timeouts: GoogleComputeStoragePoolTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this storage pool. These can be later modified by the setLabels method. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the storage pool resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```python
pool_provisioned_capacity_gb: str
```

- *Type:* str

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```python
pool_provisioned_throughput: str
```

- *Type:* str

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `capacity_provisioning_type`<sup>Optional</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```python
capacity_provisioning_type: str
```

- *Type:* str

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this storage pool. These can be later modified by the setLabels method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}

---

##### `performance_provisioning_type`<sup>Optional</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```python
performance_provisioning_type: str
```

- *Type:* str

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `pool_provisioned_iops`<sup>Optional</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```python
pool_provisioned_iops: str
```

- *Type:* str

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeStoragePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

### GoogleComputeStoragePoolResourceStatus <a name="GoogleComputeStoragePoolResourceStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus()
```


### GoogleComputeStoragePoolStatus <a name="GoogleComputeStoragePoolStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolStatus()
```


### GoogleComputeStoragePoolTimeouts <a name="GoogleComputeStoragePoolTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeStoragePoolResourceStatusList <a name="GoogleComputeStoragePoolResourceStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeStoragePoolResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeStoragePoolResourceStatusOutputReference <a name="GoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">disk_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">last_resize_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">max_total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">pool_used_capacity_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">pool_used_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">pool_used_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">pool_user_written_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">total_provisioned_disk_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">total_provisioned_disk_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```python
disk_count: str
```

- *Type:* str

---

##### `last_resize_timestamp`<sup>Required</sup> <a name="last_resize_timestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```python
last_resize_timestamp: str
```

- *Type:* str

---

##### `max_total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="max_total_provisioned_disk_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```python
max_total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `pool_used_capacity_bytes`<sup>Required</sup> <a name="pool_used_capacity_bytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```python
pool_used_capacity_bytes: str
```

- *Type:* str

---

##### `pool_used_iops`<sup>Required</sup> <a name="pool_used_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```python
pool_used_iops: str
```

- *Type:* str

---

##### `pool_used_throughput`<sup>Required</sup> <a name="pool_used_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```python
pool_used_throughput: str
```

- *Type:* str

---

##### `pool_user_written_bytes`<sup>Required</sup> <a name="pool_user_written_bytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```python
pool_user_written_bytes: str
```

- *Type:* str

---

##### `total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="total_provisioned_disk_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```python
total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `total_provisioned_disk_iops`<sup>Required</sup> <a name="total_provisioned_disk_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```python
total_provisioned_disk_iops: str
```

- *Type:* str

---

##### `total_provisioned_disk_throughput`<sup>Required</sup> <a name="total_provisioned_disk_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```python
total_provisioned_disk_throughput: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeStoragePoolResourceStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a>

---


### GoogleComputeStoragePoolStatusList <a name="GoogleComputeStoragePoolStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeStoragePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeStoragePoolStatusOutputReference <a name="GoogleComputeStoragePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount">disk_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">last_resize_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">max_total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">pool_used_capacity_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">pool_used_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">pool_used_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">pool_user_written_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">total_provisioned_disk_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">total_provisioned_disk_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```python
disk_count: str
```

- *Type:* str

---

##### `last_resize_timestamp`<sup>Required</sup> <a name="last_resize_timestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```python
last_resize_timestamp: str
```

- *Type:* str

---

##### `max_total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="max_total_provisioned_disk_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```python
max_total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `pool_used_capacity_bytes`<sup>Required</sup> <a name="pool_used_capacity_bytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```python
pool_used_capacity_bytes: str
```

- *Type:* str

---

##### `pool_used_iops`<sup>Required</sup> <a name="pool_used_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```python
pool_used_iops: str
```

- *Type:* str

---

##### `pool_used_throughput`<sup>Required</sup> <a name="pool_used_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```python
pool_used_throughput: str
```

- *Type:* str

---

##### `pool_user_written_bytes`<sup>Required</sup> <a name="pool_user_written_bytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```python
pool_user_written_bytes: str
```

- *Type:* str

---

##### `total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="total_provisioned_disk_capacity_gb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```python
total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `total_provisioned_disk_iops`<sup>Required</sup> <a name="total_provisioned_disk_iops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```python
total_provisioned_disk_iops: str
```

- *Type:* str

---

##### `total_provisioned_disk_throughput`<sup>Required</sup> <a name="total_provisioned_disk_throughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```python
total_provisioned_disk_throughput: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeStoragePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a>

---


### GoogleComputeStoragePoolTimeoutsOutputReference <a name="GoogleComputeStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_storage_pool

googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>]

---



