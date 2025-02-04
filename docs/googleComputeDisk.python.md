# `googleComputeDisk` Submodule <a name="`googleComputeDisk` Submodule" id="@cdktf/provider-google-beta.googleComputeDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeDisk <a name="GoogleComputeDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk google_compute_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDisk(
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
  access_mode: str = None,
  async_primary_disk: GoogleComputeDiskAsyncPrimaryDisk = None,
  description: str = None,
  disk_encryption_key: GoogleComputeDiskDiskEncryptionKey = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None,
  guest_os_features: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]] = None,
  id: str = None,
  image: str = None,
  interface: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  multi_writer: typing.Union[bool, IResolvable] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  resource_policies: typing.List[str] = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_image_encryption_key: GoogleComputeDiskSourceImageEncryptionKey = None,
  source_snapshot_encryption_key: GoogleComputeDiskSourceSnapshotEncryptionKey = None,
  storage_pool: str = None,
  timeouts: GoogleComputeDiskTimeouts = None,
  type: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this disk is using confidential compute mode. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#id GoogleComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.image">image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.interface">interface</a></code> | <code>str</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.multiWriter">multi_writer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not the disk can be read/write attached to more than one instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#project GoogleComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much Throughput must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | Resource policies applied to this disk for automatic snapshot creations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.storagePool">storage_pool</a></code> | <code>str</code> | The URL or the name of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#name GoogleComputeDisk#name}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.accessMode"></a>

- *Type:* str

The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#access_mode GoogleComputeDisk#access_mode}

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.asyncPrimaryDisk"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#async_primary_disk GoogleComputeDisk#async_primary_disk}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#description GoogleComputeDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.diskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#disk_encryption_key GoogleComputeDisk#disk_encryption_key}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.enableConfidentialCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this disk is using confidential compute mode.

Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#enable_confidential_compute GoogleComputeDisk#enable_confidential_compute}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.guestOsFeatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#guest_os_features GoogleComputeDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#id GoogleComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.image"></a>

- *Type:* str

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#image GoogleComputeDisk#image}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.interface"></a>

- *Type:* str

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#interface GoogleComputeDisk#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#labels GoogleComputeDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.licenses"></a>

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#licenses GoogleComputeDisk#licenses}

---

##### `multi_writer`<sup>Optional</sup> <a name="multi_writer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.multiWriter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not the disk can be read/write attached to more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#multi_writer GoogleComputeDisk#multi_writer}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.physicalBlockSizeBytes"></a>

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#physical_block_size_bytes GoogleComputeDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#project GoogleComputeDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisionedIops"></a>

- *Type:* typing.Union[int, float]

Indicates how many IOPS must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#provisioned_iops GoogleComputeDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.provisionedThroughput"></a>

- *Type:* typing.Union[int, float]

Indicates how much Throughput must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#provisioned_throughput GoogleComputeDisk#provisioned_throughput}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.resourcePolicies"></a>

- *Type:* typing.List[str]

Resource policies applied to this disk for automatic snapshot creations.

~>**NOTE** This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
['google_compute_disk_resource_policy_attachment'](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_disk_resource_policy_attachment)
to allow for updating the resource policy attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#resource_policies GoogleComputeDisk#resource_policies}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#size GoogleComputeDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.snapshot"></a>

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#snapshot GoogleComputeDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceDisk"></a>

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
* projects/{project}/zones/{zone}/disks/{disk}
* projects/{project}/regions/{region}/disks/{disk}
* zones/{zone}/disks/{disk}
* regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_disk GoogleComputeDisk#source_disk}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceImageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_image_encryption_key GoogleComputeDisk#source_image_encryption_key}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_snapshot_encryption_key GoogleComputeDisk#source_snapshot_encryption_key}

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.storagePool"></a>

- *Type:* str

The URL or the name of the storage pool in which the new disk is created.

For example:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
* /projects/{project}/zones/{zone}/storagePools/{storagePool}
* /zones/{zone}/storagePools/{storagePool}
* /{storagePool}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#storage_pool GoogleComputeDisk#storage_pool}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#timeouts GoogleComputeDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.type"></a>

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#type GoogleComputeDisk#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#zone GoogleComputeDisk#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putAsyncPrimaryDisk">put_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey">put_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putGuestOsFeatures">put_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey">put_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey">put_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetAsyncPrimaryDisk">reset_async_primary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDiskEncryptionKey">reset_disk_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetGuestOsFeatures">reset_guest_os_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLicenses">reset_licenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetMultiWriter">reset_multi_writer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetPhysicalBlockSizeBytes">reset_physical_block_size_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedIops">reset_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetResourcePolicies">reset_resource_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceDisk">reset_source_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceImageEncryptionKey">reset_source_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceSnapshotEncryptionKey">reset_source_snapshot_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetStoragePool">reset_storage_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_async_primary_disk` <a name="put_async_primary_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putAsyncPrimaryDisk"></a>

```python
def put_async_primary_disk(
  disk: str
) -> None
```

###### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putAsyncPrimaryDisk.parameter.disk"></a>

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#disk GoogleComputeDisk#disk}

---

##### `put_disk_encryption_key` <a name="put_disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey"></a>

```python
def put_disk_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

###### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putDiskEncryptionKey.parameter.rsaEncryptedKey"></a>

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#rsa_encrypted_key GoogleComputeDisk#rsa_encrypted_key}

---

##### `put_guest_os_features` <a name="put_guest_os_features" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putGuestOsFeatures"></a>

```python
def put_guest_os_features(
  value: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putGuestOsFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]

---

##### `put_source_image_encryption_key` <a name="put_source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey"></a>

```python
def put_source_image_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceImageEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

##### `put_source_snapshot_encryption_key` <a name="put_source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey"></a>

```python
def put_source_snapshot_encryption_key(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey.parameter.kmsKeySelfLink"></a>

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putSourceSnapshotEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#create GoogleComputeDisk#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#update GoogleComputeDisk#update}.

---

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_async_primary_disk` <a name="reset_async_primary_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetAsyncPrimaryDisk"></a>

```python
def reset_async_primary_disk() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_encryption_key` <a name="reset_disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetDiskEncryptionKey"></a>

```python
def reset_disk_encryption_key() -> None
```

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```

##### `reset_guest_os_features` <a name="reset_guest_os_features" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetGuestOsFeatures"></a>

```python
def reset_guest_os_features() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_licenses` <a name="reset_licenses" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetLicenses"></a>

```python
def reset_licenses() -> None
```

##### `reset_multi_writer` <a name="reset_multi_writer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetMultiWriter"></a>

```python
def reset_multi_writer() -> None
```

##### `reset_physical_block_size_bytes` <a name="reset_physical_block_size_bytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetPhysicalBlockSizeBytes"></a>

```python
def reset_physical_block_size_bytes() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_provisioned_iops` <a name="reset_provisioned_iops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedIops"></a>

```python
def reset_provisioned_iops() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```

##### `reset_resource_policies` <a name="reset_resource_policies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetResourcePolicies"></a>

```python
def reset_resource_policies() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_source_disk` <a name="reset_source_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceDisk"></a>

```python
def reset_source_disk() -> None
```

##### `reset_source_image_encryption_key` <a name="reset_source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceImageEncryptionKey"></a>

```python
def reset_source_image_encryption_key() -> None
```

##### `reset_source_snapshot_encryption_key` <a name="reset_source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetSourceSnapshotEncryptionKey"></a>

```python
def reset_source_snapshot_encryption_key() -> None
```

##### `reset_storage_pool` <a name="reset_storage_pool" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetStoragePool"></a>

```python
def reset_storage_pool() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeDisk resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDisk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeDisk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference">GoogleComputeDiskAsyncPrimaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference">GoogleComputeDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.guestOsFeatures">guest_os_features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList">GoogleComputeDiskGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastAttachTimestamp">last_attach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastDetachTimestamp">last_detach_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference">GoogleComputeDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference">GoogleComputeDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.asyncPrimaryDiskInput">async_primary_disk_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKeyInput">disk_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.guestOsFeaturesInput">guest_os_features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.licensesInput">licenses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriterInput">multi_writer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytesInput">physical_block_size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIopsInput">provisioned_iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePoliciesInput">resource_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshotInput">snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKeyInput">source_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKeyInput">source_snapshot_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriter">multi_writer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `async_primary_disk`<sup>Required</sup> <a name="async_primary_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: GoogleComputeDiskAsyncPrimaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference">GoogleComputeDiskAsyncPrimaryDiskOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKey"></a>

```python
disk_encryption_key: GoogleComputeDiskDiskEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference">GoogleComputeDiskDiskEncryptionKeyOutputReference</a>

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.guestOsFeatures"></a>

```python
guest_os_features: GoogleComputeDiskGuestOsFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList">GoogleComputeDiskGuestOsFeaturesList</a>

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `last_attach_timestamp`<sup>Required</sup> <a name="last_attach_timestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastAttachTimestamp"></a>

```python
last_attach_timestamp: str
```

- *Type:* str

---

##### `last_detach_timestamp`<sup>Required</sup> <a name="last_detach_timestamp" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.lastDetachTimestamp"></a>

```python
last_detach_timestamp: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source_disk_id`<sup>Required</sup> <a name="source_disk_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskId"></a>

```python
source_disk_id: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: GoogleComputeDiskSourceImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference">GoogleComputeDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeouts"></a>

```python
timeouts: GoogleComputeDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference">GoogleComputeDiskTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `async_primary_disk_input`<sup>Optional</sup> <a name="async_primary_disk_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.asyncPrimaryDiskInput"></a>

```python
async_primary_disk_input: GoogleComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_encryption_key_input`<sup>Optional</sup> <a name="disk_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.diskEncryptionKeyInput"></a>

```python
disk_encryption_key_input: GoogleComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `guest_os_features_input`<sup>Optional</sup> <a name="guest_os_features_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.guestOsFeaturesInput"></a>

```python
guest_os_features_input: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses_input`<sup>Optional</sup> <a name="licenses_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.licensesInput"></a>

```python
licenses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_writer_input`<sup>Optional</sup> <a name="multi_writer_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriterInput"></a>

```python
multi_writer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_block_size_bytes_input`<sup>Optional</sup> <a name="physical_block_size_bytes_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytesInput"></a>

```python
physical_block_size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provisioned_iops_input`<sup>Optional</sup> <a name="provisioned_iops_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIopsInput"></a>

```python
provisioned_iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_policies_input`<sup>Optional</sup> <a name="resource_policies_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePoliciesInput"></a>

```python
resource_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshotInput"></a>

```python
snapshot_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `source_image_encryption_key_input`<sup>Optional</sup> <a name="source_image_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceImageEncryptionKeyInput"></a>

```python
source_image_encryption_key_input: GoogleComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

---

##### `source_snapshot_encryption_key_input`<sup>Optional</sup> <a name="source_snapshot_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```python
source_snapshot_encryption_key_input: GoogleComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_writer`<sup>Required</sup> <a name="multi_writer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.multiWriter"></a>

```python
multi_writer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_block_size_bytes`<sup>Required</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.physicalBlockSizeBytes"></a>

```python
physical_block_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeDiskAsyncPrimaryDisk <a name="GoogleComputeDiskAsyncPrimaryDisk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk(
  disk: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk.property.disk">disk</a></code> | <code>str</code> | Primary disk for asynchronous disk replication. |

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk.property.disk"></a>

```python
disk: str
```

- *Type:* str

Primary disk for asynchronous disk replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#disk GoogleComputeDisk#disk}

---

### GoogleComputeDiskConfig <a name="GoogleComputeDiskConfig" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_mode: str = None,
  async_primary_disk: GoogleComputeDiskAsyncPrimaryDisk = None,
  description: str = None,
  disk_encryption_key: GoogleComputeDiskDiskEncryptionKey = None,
  enable_confidential_compute: typing.Union[bool, IResolvable] = None,
  guest_os_features: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]] = None,
  id: str = None,
  image: str = None,
  interface: str = None,
  labels: typing.Mapping[str] = None,
  licenses: typing.List[str] = None,
  multi_writer: typing.Union[bool, IResolvable] = None,
  physical_block_size_bytes: typing.Union[int, float] = None,
  project: str = None,
  provisioned_iops: typing.Union[int, float] = None,
  provisioned_throughput: typing.Union[int, float] = None,
  resource_policies: typing.List[str] = None,
  size: typing.Union[int, float] = None,
  snapshot: str = None,
  source_disk: str = None,
  source_image_encryption_key: GoogleComputeDiskSourceImageEncryptionKey = None,
  source_snapshot_encryption_key: GoogleComputeDiskSourceSnapshotEncryptionKey = None,
  storage_pool: str = None,
  timeouts: GoogleComputeDiskTimeouts = None,
  type: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.accessMode">access_mode</a></code> | <code>str</code> | The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.asyncPrimaryDisk">async_primary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a></code> | async_primary_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this disk is using confidential compute mode. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#id GoogleComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.image">image</a></code> | <code>str</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.interface">interface</a></code> | <code>str</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.multiWriter">multi_writer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not the disk can be read/write attached to more than one instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.physicalBlockSizeBytes">physical_block_size_bytes</a></code> | <code>typing.Union[int, float]</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#project GoogleComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | Indicates how many IOPS must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | Indicates how much Throughput must be provisioned for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | Resource policies applied to this disk for automatic snapshot creations. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.snapshot">snapshot</a></code> | <code>str</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.storagePool">storage_pool</a></code> | <code>str</code> | The URL or the name of the storage pool in which the new disk is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.type">type</a></code> | <code>str</code> | URL of the disk type resource describing which disk type to use to create the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#name GoogleComputeDisk#name}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

The accessMode of the disk. For example: * READ_WRITE_SINGLE * READ_WRITE_MANY * READ_ONLY_SINGLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#access_mode GoogleComputeDisk#access_mode}

---

##### `async_primary_disk`<sup>Optional</sup> <a name="async_primary_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.asyncPrimaryDisk"></a>

```python
async_primary_disk: GoogleComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a>

async_primary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#async_primary_disk GoogleComputeDisk#async_primary_disk}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#description GoogleComputeDisk#description}

---

##### `disk_encryption_key`<sup>Optional</sup> <a name="disk_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.diskEncryptionKey"></a>

```python
disk_encryption_key: GoogleComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#disk_encryption_key GoogleComputeDisk#disk_encryption_key}

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this disk is using confidential compute mode.

Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#enable_confidential_compute GoogleComputeDisk#enable_confidential_compute}

---

##### `guest_os_features`<sup>Optional</sup> <a name="guest_os_features" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.guestOsFeatures"></a>

```python
guest_os_features: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#guest_os_features GoogleComputeDisk#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#id GoogleComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.image"></a>

```python
image: str
```

- *Type:* str

The image from which to initialize this disk.

This can be
one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
'projects/{project}/global/images/family/{family}', 'global/images/{image}',
'global/images/family/{family}', 'family/{family}', '{project}/{family}',
'{project}/{image}', '{family}', or '{image}'. If referred by family, the
images names must include the family name. If they don't, use the
[google_compute_image data source](/docs/providers/google/d/compute_image.html).
For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
These images can be referred by family name here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#image GoogleComputeDisk#image}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.interface"></a>

```python
interface: str
```

- *Type:* str

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#interface GoogleComputeDisk#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#labels GoogleComputeDisk#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#licenses GoogleComputeDisk#licenses}

---

##### `multi_writer`<sup>Optional</sup> <a name="multi_writer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.multiWriter"></a>

```python
multi_writer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not the disk can be read/write attached to more than one instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#multi_writer GoogleComputeDisk#multi_writer}

---

##### `physical_block_size_bytes`<sup>Optional</sup> <a name="physical_block_size_bytes" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.physicalBlockSizeBytes"></a>

```python
physical_block_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#physical_block_size_bytes GoogleComputeDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#project GoogleComputeDisk#project}.

---

##### `provisioned_iops`<sup>Optional</sup> <a name="provisioned_iops" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how many IOPS must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#provisioned_iops GoogleComputeDisk#provisioned_iops}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates how much Throughput must be provisioned for the disk.

Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#provisioned_throughput GoogleComputeDisk#provisioned_throughput}

---

##### `resource_policies`<sup>Optional</sup> <a name="resource_policies" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

Resource policies applied to this disk for automatic snapshot creations.

~>**NOTE** This value does not support updating the
resource policy, as resource policies can not be updated more than
one at a time. Use
['google_compute_disk_resource_policy_attachment'](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_disk_resource_policy_attachment)
to allow for updating the resource policy attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#resource_policies GoogleComputeDisk#resource_policies}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the 'image' or
'snapshot' parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with 'image' or 'snapshot',
the value must not be less than the size of the image
or the size of the snapshot.

~>**NOTE** If you change the size, Terraform updates the disk size
if upsizing is detected but recreates the disk if downsizing is requested.
You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
and recreating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#size GoogleComputeDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. If the snapshot is in another
project than this disk, you must supply a full URL. For example, the
following are valid values:

* 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
* 'projects/project/global/snapshots/snapshot'
* 'global/snapshots/snapshot'
* 'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#snapshot GoogleComputeDisk#snapshot}

---

##### `source_disk`<sup>Optional</sup> <a name="source_disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
* https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
* projects/{project}/zones/{zone}/disks/{disk}
* projects/{project}/regions/{region}/disks/{disk}
* zones/{zone}/disks/{disk}
* regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_disk GoogleComputeDisk#source_disk}

---

##### `source_image_encryption_key`<sup>Optional</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: GoogleComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_image_encryption_key GoogleComputeDisk#source_image_encryption_key}

---

##### `source_snapshot_encryption_key`<sup>Optional</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: GoogleComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#source_snapshot_encryption_key GoogleComputeDisk#source_snapshot_encryption_key}

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

The URL or the name of the storage pool in which the new disk is created.

For example:

* https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
* /projects/{project}/zones/{zone}/storagePools/{storagePool}
* /zones/{zone}/storagePools/{storagePool}
* /{storagePool}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#storage_pool GoogleComputeDisk#storage_pool}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#timeouts GoogleComputeDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.type"></a>

```python
type: str
```

- *Type:* str

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#type GoogleComputeDisk#type}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#zone GoogleComputeDisk#zone}

---

### GoogleComputeDiskDiskEncryptionKey <a name="GoogleComputeDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskDiskEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None,
  rsa_encrypted_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

##### `rsa_encrypted_key`<sup>Optional</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#rsa_encrypted_key GoogleComputeDisk#rsa_encrypted_key}

---

### GoogleComputeDiskGuestOsFeatures <a name="GoogleComputeDiskGuestOsFeatures" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskGuestOsFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures.property.type">type</a></code> | <code>str</code> | The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#type GoogleComputeDisk#type}

---

### GoogleComputeDiskSourceImageEncryptionKey <a name="GoogleComputeDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

### GoogleComputeDiskSourceSnapshotEncryptionKey <a name="GoogleComputeDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey(
  kms_key_self_link: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | The self link of the encryption key used to encrypt the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_self_link`<sup>Optional</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

The self link of the encryption key used to encrypt the disk.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}

---

### GoogleComputeDiskTimeouts <a name="GoogleComputeDiskTimeouts" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#create GoogleComputeDisk#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#update GoogleComputeDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#create GoogleComputeDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_compute_disk#update GoogleComputeDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeDiskAsyncPrimaryDiskOutputReference <a name="GoogleComputeDiskAsyncPrimaryDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeDiskAsyncPrimaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskAsyncPrimaryDisk">GoogleComputeDiskAsyncPrimaryDisk</a>

---


### GoogleComputeDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">reset_rsa_encrypted_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```

##### `reset_rsa_encrypted_key` <a name="reset_rsa_encrypted_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```python
def reset_rsa_encrypted_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsa_encrypted_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsa_encrypted_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `rsa_encrypted_key_input`<sup>Optional</sup> <a name="rsa_encrypted_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```python
rsa_encrypted_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `rsa_encrypted_key`<sup>Required</sup> <a name="rsa_encrypted_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```python
rsa_encrypted_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskDiskEncryptionKey">GoogleComputeDiskDiskEncryptionKey</a>

---


### GoogleComputeDiskGuestOsFeaturesList <a name="GoogleComputeDiskGuestOsFeaturesList" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeDiskGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeDiskGuestOsFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]]

---


### GoogleComputeDiskGuestOsFeaturesOutputReference <a name="GoogleComputeDiskGuestOsFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeDiskGuestOsFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskGuestOsFeatures">GoogleComputeDiskGuestOsFeatures</a>]

---


### GoogleComputeDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceImageEncryptionKey">GoogleComputeDiskSourceImageEncryptionKey</a>

---


### GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">reset_kms_key_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_self_link` <a name="reset_kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```python
def reset_kms_key_self_link() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kms_key_self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_self_link_input`<sup>Optional</sup> <a name="kms_key_self_link_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```python
kms_key_self_link_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskSourceSnapshotEncryptionKey">GoogleComputeDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeDiskTimeoutsOutputReference <a name="GoogleComputeDiskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk

googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeDiskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDisk.GoogleComputeDiskTimeouts">GoogleComputeDiskTimeouts</a>]

---



