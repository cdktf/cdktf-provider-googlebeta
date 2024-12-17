# `googleNotebooksInstance` Submodule <a name="`googleNotebooksInstance` Submodule" id="@cdktf/provider-google-beta.googleNotebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksInstance <a name="GoogleNotebooksInstance" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  machine_type: str,
  name: str,
  accelerator_config: GoogleNotebooksInstanceAcceleratorConfig = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None,
  container_image: GoogleNotebooksInstanceContainerImage = None,
  create_time: str = None,
  custom_gpu_driver_path: str = None,
  data_disk_size_gb: typing.Union[int, float] = None,
  data_disk_type: str = None,
  desired_state: str = None,
  disk_encryption: str = None,
  id: str = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  instance_owners: typing.List[str] = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  no_proxy_access: typing.Union[bool, IResolvable] = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  no_remove_data_disk: typing.Union[bool, IResolvable] = None,
  post_startup_script: str = None,
  project: str = None,
  reservation_affinity: GoogleNotebooksInstanceReservationAffinity = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: GoogleNotebooksInstanceShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleNotebooksInstanceTimeouts = None,
  update_time: str = None,
  vm_image: GoogleNotebooksInstanceVmImage = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.createTime">create_time</a></code> | <code>str</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dataDiskType">data_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.diskEncryption">disk_encryption</a></code> | <code>str</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.subnet">subnet</a></code> | <code>str</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.updateTime">update_time</a></code> | <code>str</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.location"></a>

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#location GoogleNotebooksInstance#location}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.machineType"></a>

- *Type:* str

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#machine_type GoogleNotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#name GoogleNotebooksInstance#name}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#accelerator_config GoogleNotebooksInstance#accelerator_config}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#boot_disk_size_gb GoogleNotebooksInstance#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.bootDiskType"></a>

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#boot_disk_type GoogleNotebooksInstance#boot_disk_type}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#container_image GoogleNotebooksInstance#container_image}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.createTime"></a>

- *Type:* str

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#create_time GoogleNotebooksInstance#create_time}

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.customGpuDriverPath"></a>

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#custom_gpu_driver_path GoogleNotebooksInstance#custom_gpu_driver_path}

---

##### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dataDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#data_disk_size_gb GoogleNotebooksInstance#data_disk_size_gb}

---

##### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.dataDiskType"></a>

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#data_disk_type GoogleNotebooksInstance#data_disk_type}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#desired_state GoogleNotebooksInstance#desired_state}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.diskEncryption"></a>

- *Type:* str

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#disk_encryption GoogleNotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.installGpuDriver"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#install_gpu_driver GoogleNotebooksInstance#install_gpu_driver}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* typing.List[str]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#instance_owners GoogleNotebooksInstance#instance_owners}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.kmsKey"></a>

- *Type:* str

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#kms_key GoogleNotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#labels GoogleNotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#metadata GoogleNotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#network GoogleNotebooksInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.nicType"></a>

- *Type:* str

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#nic_type GoogleNotebooksInstance#nic_type}

---

##### `no_proxy_access`<sup>Optional</sup> <a name="no_proxy_access" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noProxyAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_proxy_access GoogleNotebooksInstance#no_proxy_access}

---

##### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noPublicIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_public_ip GoogleNotebooksInstance#no_public_ip}

---

##### `no_remove_data_disk`<sup>Optional</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.noRemoveDataDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_remove_data_disk GoogleNotebooksInstance#no_remove_data_disk}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.postStartupScript"></a>

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#post_startup_script GoogleNotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}.

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#reservation_affinity GoogleNotebooksInstance#reservation_affinity}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#service_account GoogleNotebooksInstance#service_account}

---

##### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.serviceAccountScopes"></a>

- *Type:* typing.List[str]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#service_account_scopes GoogleNotebooksInstance#service_account_scopes}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#shielded_instance_config GoogleNotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.subnet"></a>

- *Type:* str

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#subnet GoogleNotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#tags GoogleNotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#timeouts GoogleNotebooksInstance#timeouts}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.updateTime"></a>

- *Type:* str

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#update_time GoogleNotebooksInstance#update_time}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#vm_image GoogleNotebooksInstance#vm_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig">put_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage">put_vm_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig">reset_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType">reset_boot_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath">reset_custom_gpu_driver_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb">reset_data_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType">reset_data_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption">reset_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver">reset_install_gpu_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners">reset_instance_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess">reset_no_proxy_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp">reset_no_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk">reset_no_remove_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes">reset_service_account_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime">reset_update_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage">reset_vm_image</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_accelerator_config` <a name="put_accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig"></a>

```python
def put_accelerator_config(
  core_count: typing.Union[int, float],
  type: str
) -> None
```

###### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#core_count GoogleNotebooksInstance#core_count}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig.parameter.type"></a>

- *Type:* str

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#type GoogleNotebooksInstance#type}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage"></a>

```python
def put_container_image(
  repository: str,
  tag: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage.parameter.repository"></a>

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#repository GoogleNotebooksInstance#repository}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage.parameter.tag"></a>

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#tag GoogleNotebooksInstance#tag}

---

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity.parameter.consumeReservationType"></a>

- *Type:* str

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#consume_reservation_type GoogleNotebooksInstance#consume_reservation_type}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity.parameter.key"></a>

- *Type:* str

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#key GoogleNotebooksInstance#key}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#values GoogleNotebooksInstance#values}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_integrity_monitoring GoogleNotebooksInstance#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_secure_boot GoogleNotebooksInstance#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_vtpm GoogleNotebooksInstance#enable_vtpm}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}.

---

##### `put_vm_image` <a name="put_vm_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage"></a>

```python
def put_vm_image(
  project: str,
  image_family: str = None,
  image_name: str = None
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}

---

###### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage.parameter.imageFamily"></a>

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#image_family GoogleNotebooksInstance#image_family}

---

###### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage.parameter.imageName"></a>

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#image_name GoogleNotebooksInstance#image_name}

---

##### `reset_accelerator_config` <a name="reset_accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig"></a>

```python
def reset_accelerator_config() -> None
```

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_boot_disk_type` <a name="reset_boot_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType"></a>

```python
def reset_boot_disk_type() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_custom_gpu_driver_path` <a name="reset_custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath"></a>

```python
def reset_custom_gpu_driver_path() -> None
```

##### `reset_data_disk_size_gb` <a name="reset_data_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb"></a>

```python
def reset_data_disk_size_gb() -> None
```

##### `reset_data_disk_type` <a name="reset_data_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType"></a>

```python
def reset_data_disk_type() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_disk_encryption` <a name="reset_disk_encryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption"></a>

```python
def reset_disk_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_install_gpu_driver` <a name="reset_install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver"></a>

```python
def reset_install_gpu_driver() -> None
```

##### `reset_instance_owners` <a name="reset_instance_owners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners"></a>

```python
def reset_instance_owners() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_no_proxy_access` <a name="reset_no_proxy_access" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess"></a>

```python
def reset_no_proxy_access() -> None
```

##### `reset_no_public_ip` <a name="reset_no_public_ip" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp"></a>

```python
def reset_no_public_ip() -> None
```

##### `reset_no_remove_data_disk` <a name="reset_no_remove_data_disk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk"></a>

```python
def reset_no_remove_data_disk() -> None
```

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_service_account_scopes` <a name="reset_service_account_scopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes"></a>

```python
def reset_service_account_scopes() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```

##### `reset_vm_image` <a name="reset_vm_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage"></a>

```python
def reset_vm_image() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNotebooksInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput">accelerator_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput">boot_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput">custom_gpu_driver_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput">data_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput">data_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput">disk_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput">install_gpu_driver_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput">instance_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput">no_proxy_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput">no_public_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput">no_remove_data_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput">service_account_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_config`<sup>Required</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleNotebooksInstanceAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage"></a>

```python
container_image: GoogleNotebooksInstanceContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleNotebooksInstanceReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleNotebooksInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts"></a>

```python
timeouts: GoogleNotebooksInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a>

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage"></a>

```python
vm_image: GoogleNotebooksInstanceVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a>

---

##### `accelerator_config_input`<sup>Optional</sup> <a name="accelerator_config_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput"></a>

```python
accelerator_config_input: GoogleNotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type_input`<sup>Optional</sup> <a name="boot_disk_type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput"></a>

```python
boot_disk_type_input: str
```

- *Type:* str

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput"></a>

```python
container_image_input: GoogleNotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `custom_gpu_driver_path_input`<sup>Optional</sup> <a name="custom_gpu_driver_path_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput"></a>

```python
custom_gpu_driver_path_input: str
```

- *Type:* str

---

##### `data_disk_size_gb_input`<sup>Optional</sup> <a name="data_disk_size_gb_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput"></a>

```python
data_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_type_input`<sup>Optional</sup> <a name="data_disk_type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput"></a>

```python
data_disk_type_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `disk_encryption_input`<sup>Optional</sup> <a name="disk_encryption_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput"></a>

```python
disk_encryption_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `install_gpu_driver_input`<sup>Optional</sup> <a name="install_gpu_driver_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput"></a>

```python
install_gpu_driver_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_owners_input`<sup>Optional</sup> <a name="instance_owners_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput"></a>

```python
instance_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `no_proxy_access_input`<sup>Optional</sup> <a name="no_proxy_access_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput"></a>

```python
no_proxy_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_public_ip_input`<sup>Optional</sup> <a name="no_public_ip_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput"></a>

```python
no_public_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_remove_data_disk_input`<sup>Optional</sup> <a name="no_remove_data_disk_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput"></a>

```python
no_remove_data_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: GoogleNotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_account_scopes_input`<sup>Optional</sup> <a name="service_account_scopes_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput"></a>

```python
service_account_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleNotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNotebooksInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>]

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput"></a>

```python
vm_image_input: GoogleNotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type`<sup>Required</sup> <a name="boot_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_gpu_driver_path`<sup>Required</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

---

##### `data_disk_size_gb`<sup>Required</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_disk_type`<sup>Required</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `disk_encryption`<sup>Required</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `install_gpu_driver`<sup>Required</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_owners`<sup>Required</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `no_proxy_access`<sup>Required</sup> <a name="no_proxy_access" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess"></a>

```python
no_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_public_ip`<sup>Required</sup> <a name="no_public_ip" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_remove_data_disk`<sup>Required</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk"></a>

```python
no_remove_data_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `service_account_scopes`<sup>Required</sup> <a name="service_account_scopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksInstanceAcceleratorConfig <a name="GoogleNotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig(
  core_count: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type">type</a></code> | <code>str</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#core_count GoogleNotebooksInstance#core_count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#type GoogleNotebooksInstance#type}

---

### GoogleNotebooksInstanceConfig <a name="GoogleNotebooksInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  machine_type: str,
  name: str,
  accelerator_config: GoogleNotebooksInstanceAcceleratorConfig = None,
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None,
  container_image: GoogleNotebooksInstanceContainerImage = None,
  create_time: str = None,
  custom_gpu_driver_path: str = None,
  data_disk_size_gb: typing.Union[int, float] = None,
  data_disk_type: str = None,
  desired_state: str = None,
  disk_encryption: str = None,
  id: str = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  instance_owners: typing.List[str] = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  no_proxy_access: typing.Union[bool, IResolvable] = None,
  no_public_ip: typing.Union[bool, IResolvable] = None,
  no_remove_data_disk: typing.Union[bool, IResolvable] = None,
  post_startup_script: str = None,
  project: str = None,
  reservation_affinity: GoogleNotebooksInstanceReservationAffinity = None,
  service_account: str = None,
  service_account_scopes: typing.List[str] = None,
  shielded_instance_config: GoogleNotebooksInstanceShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleNotebooksInstanceTimeouts = None,
  update_time: str = None,
  vm_image: GoogleNotebooksInstanceVmImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType">machine_type</a></code> | <code>str</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name">name</a></code> | <code>str</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime">create_time</a></code> | <code>str</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb">data_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType">data_disk_type</a></code> | <code>str</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption">disk_encryption</a></code> | <code>str</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners">instance_owners</a></code> | <code>typing.List[str]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess">no_proxy_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp">no_public_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk">no_remove_data_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes">service_account_scopes</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet">subnet</a></code> | <code>str</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime">update_time</a></code> | <code>str</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#location GoogleNotebooksInstance#location}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#machine_type GoogleNotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#name GoogleNotebooksInstance#name}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleNotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#accelerator_config GoogleNotebooksInstance#accelerator_config}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#boot_disk_size_gb GoogleNotebooksInstance#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#boot_disk_type GoogleNotebooksInstance#boot_disk_type}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage"></a>

```python
container_image: GoogleNotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#container_image GoogleNotebooksInstance#container_image}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#create_time GoogleNotebooksInstance#create_time}

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#custom_gpu_driver_path GoogleNotebooksInstance#custom_gpu_driver_path}

---

##### `data_disk_size_gb`<sup>Optional</sup> <a name="data_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```python
data_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#data_disk_size_gb GoogleNotebooksInstance#data_disk_size_gb}

---

##### `data_disk_type`<sup>Optional</sup> <a name="data_disk_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType"></a>

```python
data_disk_type: str
```

- *Type:* str

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#data_disk_type GoogleNotebooksInstance#data_disk_type}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#desired_state GoogleNotebooksInstance#desired_state}

---

##### `disk_encryption`<sup>Optional</sup> <a name="disk_encryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption"></a>

```python
disk_encryption: str
```

- *Type:* str

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#disk_encryption GoogleNotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#install_gpu_driver GoogleNotebooksInstance#install_gpu_driver}

---

##### `instance_owners`<sup>Optional</sup> <a name="instance_owners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners"></a>

```python
instance_owners: typing.List[str]
```

- *Type:* typing.List[str]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#instance_owners GoogleNotebooksInstance#instance_owners}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#kms_key GoogleNotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#labels GoogleNotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#metadata GoogleNotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#network GoogleNotebooksInstance#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#nic_type GoogleNotebooksInstance#nic_type}

---

##### `no_proxy_access`<sup>Optional</sup> <a name="no_proxy_access" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess"></a>

```python
no_proxy_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_proxy_access GoogleNotebooksInstance#no_proxy_access}

---

##### `no_public_ip`<sup>Optional</sup> <a name="no_public_ip" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp"></a>

```python
no_public_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_public_ip GoogleNotebooksInstance#no_public_ip}

---

##### `no_remove_data_disk`<sup>Optional</sup> <a name="no_remove_data_disk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```python
no_remove_data_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#no_remove_data_disk GoogleNotebooksInstance#no_remove_data_disk}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#post_startup_script GoogleNotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}.

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleNotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#reservation_affinity GoogleNotebooksInstance#reservation_affinity}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#service_account GoogleNotebooksInstance#service_account}

---

##### `service_account_scopes`<sup>Optional</sup> <a name="service_account_scopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes"></a>

```python
service_account_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#service_account_scopes GoogleNotebooksInstance#service_account_scopes}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleNotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#shielded_instance_config GoogleNotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#subnet GoogleNotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#tags GoogleNotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleNotebooksInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#timeouts GoogleNotebooksInstance#timeouts}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#update_time GoogleNotebooksInstance#update_time}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage"></a>

```python
vm_image: GoogleNotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#vm_image GoogleNotebooksInstance#vm_image}

---

### GoogleNotebooksInstanceContainerImage <a name="GoogleNotebooksInstanceContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceContainerImage(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#repository GoogleNotebooksInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#tag GoogleNotebooksInstance#tag}

---

### GoogleNotebooksInstanceReservationAffinity <a name="GoogleNotebooksInstanceReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity(
  consume_reservation_type: str,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key">key</a></code> | <code>str</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of reservation resource. |

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#consume_reservation_type GoogleNotebooksInstance#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#key GoogleNotebooksInstance#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#values GoogleNotebooksInstance#values}

---

### GoogleNotebooksInstanceShieldedInstanceConfig <a name="GoogleNotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_integrity_monitoring GoogleNotebooksInstance#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_secure_boot GoogleNotebooksInstance#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#enable_vtpm GoogleNotebooksInstance#enable_vtpm}

---

### GoogleNotebooksInstanceTimeouts <a name="GoogleNotebooksInstanceTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}.

---

### GoogleNotebooksInstanceVmImage <a name="GoogleNotebooksInstanceVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceVmImage(
  project: str,
  image_family: str = None,
  image_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily">image_family</a></code> | <code>str</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName">image_name</a></code> | <code>str</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}

---

##### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#image_family GoogleNotebooksInstance#image_family}

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_notebooks_instance#image_name GoogleNotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksInstanceAcceleratorConfigOutputReference <a name="GoogleNotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksInstanceAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---


### GoogleNotebooksInstanceContainerImageOutputReference <a name="GoogleNotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksInstanceContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---


### GoogleNotebooksInstanceReservationAffinityOutputReference <a name="GoogleNotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">consume_reservation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">consume_reservation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consume_reservation_type_input`<sup>Optional</sup> <a name="consume_reservation_type_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```python
consume_reservation_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consume_reservation_type`<sup>Required</sup> <a name="consume_reservation_type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```python
consume_reservation_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksInstanceReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---


### GoogleNotebooksInstanceShieldedInstanceConfigOutputReference <a name="GoogleNotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---


### GoogleNotebooksInstanceTimeoutsOutputReference <a name="GoogleNotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNotebooksInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>]

---


### GoogleNotebooksInstanceVmImageOutputReference <a name="GoogleNotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_instance

googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily">reset_image_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName">reset_image_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_family` <a name="reset_image_family" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```python
def reset_image_family() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName"></a>

```python
def reset_image_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput">image_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily">image_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_family_input`<sup>Optional</sup> <a name="image_family_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```python
image_family_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `image_family`<sup>Required</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksInstanceVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---



