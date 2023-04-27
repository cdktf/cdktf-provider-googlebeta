# `google_compute_region_disk`

Refer to the Terraform Registory for docs: [`google_compute_region_disk`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk).

# `googleComputeRegionDisk` Submodule <a name="`googleComputeRegionDisk` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionDisk <a name="GoogleComputeRegionDisk" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk google_compute_region_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDisk;

GoogleComputeRegionDisk.Builder.create(Construct scope, java.lang.String id)
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
    .replicaZones(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .diskEncryptionKey(GoogleComputeRegionDiskDiskEncryptionKey)
//  .id(java.lang.String)
//  .interface(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .physicalBlockSizeBytes(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .size(java.lang.Number)
//  .snapshot(java.lang.String)
//  .sourceDisk(java.lang.String)
//  .sourceSnapshotEncryptionKey(GoogleComputeRegionDiskSourceSnapshotEncryptionKey)
//  .timeouts(GoogleComputeRegionDiskTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | URLs of the zones where the disk should be replicated to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#id GoogleComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.interface">interface</a></code> | <code>java.lang.String</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes">physicalBlockSizeBytes</a></code> | <code>java.lang.Number</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#project GoogleComputeRegionDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.snapshot">snapshot</a></code> | <code>java.lang.String</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | URL of the disk type resource describing which disk type to use to create the disk. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#name GoogleComputeRegionDisk#name}

---

##### `replicaZones`<sup>Required</sup> <a name="replicaZones" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.replicaZones"></a>

- *Type:* java.util.List<java.lang.String>

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#replica_zones GoogleComputeRegionDisk#replica_zones}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#description GoogleComputeRegionDisk#description}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.diskEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#disk_encryption_key GoogleComputeRegionDisk#disk_encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#id GoogleComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.interface"></a>

- *Type:* java.lang.String

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#interface GoogleComputeRegionDisk#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this disk.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#labels GoogleComputeRegionDisk#labels}

---

##### `physicalBlockSizeBytes`<sup>Optional</sup> <a name="physicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.physicalBlockSizeBytes"></a>

- *Type:* java.lang.Number

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#physical_block_size_bytes GoogleComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#project GoogleComputeRegionDisk#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#region GoogleComputeRegionDisk#region}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#size GoogleComputeRegionDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.snapshot"></a>

- *Type:* java.lang.String

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
'projects/project/global/snapshots/snapshot'
'global/snapshots/snapshot'
'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#snapshot GoogleComputeRegionDisk#snapshot}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.sourceDisk"></a>

- *Type:* java.lang.String

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
projects/{project}/zones/{zone}/disks/{disk}
projects/{project}/regions/{region}/disks/{disk}
zones/{zone}/disks/{disk}
regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#source_disk GoogleComputeRegionDisk#source_disk}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.sourceSnapshotEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#source_snapshot_encryption_key GoogleComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#timeouts GoogleComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.Initializer.parameter.type"></a>

- *Type:* java.lang.String

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#type GoogleComputeRegionDisk#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetPhysicalBlockSizeBytes">resetPhysicalBlockSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSourceDisk">resetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putDiskEncryptionKey"></a>

```java
public void putDiskEncryptionKey(GoogleComputeRegionDiskDiskEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putSourceSnapshotEncryptionKey"></a>

```java
public void putSourceSnapshotEncryptionKey(GoogleComputeRegionDiskSourceSnapshotEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionDiskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetDiskEncryptionKey"></a>

```java
public void resetDiskEncryptionKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetId"></a>

```java
public void resetId()
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetInterface"></a>

```java
public void resetInterface()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPhysicalBlockSizeBytes` <a name="resetPhysicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetPhysicalBlockSizeBytes"></a>

```java
public void resetPhysicalBlockSizeBytes()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSize"></a>

```java
public void resetSize()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetSourceDisk` <a name="resetSourceDisk" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSourceDisk"></a>

```java
public void resetSourceDisk()
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetSourceSnapshotEncryptionKey"></a>

```java
public void resetSourceSnapshotEncryptionKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDisk;

GoogleComputeRegionDisk.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDisk;

GoogleComputeRegionDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDisk;

GoogleComputeRegionDisk.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lastAttachTimestamp">lastAttachTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lastDetachTimestamp">lastDetachTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDiskId">sourceDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference">GoogleComputeRegionDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.physicalBlockSizeBytesInput">physicalBlockSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.replicaZonesInput">replicaZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.snapshotInput">snapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDiskInput">sourceDiskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.physicalBlockSizeBytes">physicalBlockSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.diskEncryptionKey"></a>

```java
public GoogleComputeRegionDiskDiskEncryptionKeyOutputReference getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionDiskDiskEncryptionKeyOutputReference</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `lastAttachTimestamp`<sup>Required</sup> <a name="lastAttachTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lastAttachTimestamp"></a>

```java
public java.lang.String getLastAttachTimestamp();
```

- *Type:* java.lang.String

---

##### `lastDetachTimestamp`<sup>Required</sup> <a name="lastDetachTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.lastDetachTimestamp"></a>

```java
public java.lang.String getLastDetachTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sourceDiskId`<sup>Required</sup> <a name="sourceDiskId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDiskId"></a>

```java
public java.lang.String getSourceDiskId();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotEncryptionKey"></a>

```java
public GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotId"></a>

```java
public java.lang.String getSourceSnapshotId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.timeouts"></a>

```java
public GoogleComputeRegionDiskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference">GoogleComputeRegionDiskTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.diskEncryptionKeyInput"></a>

```java
public GoogleComputeRegionDiskDiskEncryptionKey getDiskEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `physicalBlockSizeBytesInput`<sup>Optional</sup> <a name="physicalBlockSizeBytesInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.physicalBlockSizeBytesInput"></a>

```java
public java.lang.Number getPhysicalBlockSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaZonesInput`<sup>Optional</sup> <a name="replicaZonesInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.replicaZonesInput"></a>

```java
public java.util.List<java.lang.String> getReplicaZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.snapshotInput"></a>

```java
public java.lang.String getSnapshotInput();
```

- *Type:* java.lang.String

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDiskInput"></a>

```java
public java.lang.String getSourceDiskInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceSnapshotEncryptionKeyInput"></a>

```java
public GoogleComputeRegionDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `physicalBlockSizeBytes`<sup>Required</sup> <a name="physicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.physicalBlockSizeBytes"></a>

```java
public java.lang.Number getPhysicalBlockSizeBytes();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaZones`<sup>Required</sup> <a name="replicaZones" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.replicaZones"></a>

```java
public java.util.List<java.lang.String> getReplicaZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionDiskConfig <a name="GoogleComputeRegionDiskConfig" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskConfig;

GoogleComputeRegionDiskConfig.builder()
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
    .replicaZones(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .diskEncryptionKey(GoogleComputeRegionDiskDiskEncryptionKey)
//  .id(java.lang.String)
//  .interface(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .physicalBlockSizeBytes(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .size(java.lang.Number)
//  .snapshot(java.lang.String)
//  .sourceDisk(java.lang.String)
//  .sourceSnapshotEncryptionKey(GoogleComputeRegionDiskSourceSnapshotEncryptionKey)
//  .timeouts(GoogleComputeRegionDiskTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.replicaZones">replicaZones</a></code> | <code>java.util.List<java.lang.String></code> | URLs of the zones where the disk should be replicated to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#id GoogleComputeRegionDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.interface">interface</a></code> | <code>java.lang.String</code> | Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this disk.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.physicalBlockSizeBytes">physicalBlockSizeBytes</a></code> | <code>java.lang.Number</code> | Physical block size of the persistent disk, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#project GoogleComputeRegionDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Size of the persistent disk, specified in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | The source snapshot used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | The source disk used to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.type">type</a></code> | <code>java.lang.String</code> | URL of the disk type resource describing which disk type to use to create the disk. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#name GoogleComputeRegionDisk#name}

---

##### `replicaZones`<sup>Required</sup> <a name="replicaZones" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.replicaZones"></a>

```java
public java.util.List<java.lang.String> getReplicaZones();
```

- *Type:* java.util.List<java.lang.String>

URLs of the zones where the disk should be replicated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#replica_zones GoogleComputeRegionDisk#replica_zones}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#description GoogleComputeRegionDisk#description}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.diskEncryptionKey"></a>

```java
public GoogleComputeRegionDiskDiskEncryptionKey getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#disk_encryption_key GoogleComputeRegionDisk#disk_encryption_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#id GoogleComputeRegionDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#interface GoogleComputeRegionDisk#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this disk.  A list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#labels GoogleComputeRegionDisk#labels}

---

##### `physicalBlockSizeBytes`<sup>Optional</sup> <a name="physicalBlockSizeBytes" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.physicalBlockSizeBytes"></a>

```java
public java.lang.Number getPhysicalBlockSizeBytes();
```

- *Type:* java.lang.Number

Physical block size of the persistent disk, in bytes.

If not present
in a request, a default value is used. Currently supported sizes
are 4096 and 16384, other sizes may be added in the future.
If an unsupported value is requested, the error message will list
the supported values for the caller's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#physical_block_size_bytes GoogleComputeRegionDisk#physical_block_size_bytes}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#project GoogleComputeRegionDisk#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#region GoogleComputeRegionDisk#region}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Size of the persistent disk, specified in GB.

You can specify this
field when creating a persistent disk using the sourceImage or
sourceSnapshot parameter, or specify it alone to create an empty
persistent disk.

If you specify this field along with sourceImage or sourceSnapshot,
the value of sizeGb must not be less than the size of the sourceImage
or the size of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#size GoogleComputeRegionDisk#size}

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

The source snapshot used to create this disk.

You can provide this as
a partial or full URL to the resource. For example, the following are
valid values:

'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
'projects/project/global/snapshots/snapshot'
'global/snapshots/snapshot'
'snapshot'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#snapshot GoogleComputeRegionDisk#snapshot}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

The source disk used to create this disk.

You can provide this as a partial or full URL to the resource.
For example, the following are valid values:

https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
projects/{project}/zones/{zone}/disks/{disk}
projects/{project}/regions/{region}/disks/{disk}
zones/{zone}/disks/{disk}
regions/{region}/disks/{disk}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#source_disk GoogleComputeRegionDisk#source_disk}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.sourceSnapshotEncryptionKey"></a>

```java
public GoogleComputeRegionDiskSourceSnapshotEncryptionKey getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#source_snapshot_encryption_key GoogleComputeRegionDisk#source_snapshot_encryption_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.timeouts"></a>

```java
public GoogleComputeRegionDiskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#timeouts GoogleComputeRegionDisk#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

URL of the disk type resource describing which disk type to use to create the disk.

Provide this when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#type GoogleComputeRegionDisk#type}

---

### GoogleComputeRegionDiskDiskEncryptionKey <a name="GoogleComputeRegionDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskDiskEncryptionKey;

GoogleComputeRegionDiskDiskEncryptionKey.builder()
//  .kmsKeyName(java.lang.String)
//  .rawKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#kms_key_name GoogleComputeRegionDisk#kms_key_name}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#raw_key GoogleComputeRegionDisk#raw_key}

---

### GoogleComputeRegionDiskSourceSnapshotEncryptionKey <a name="GoogleComputeRegionDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey;

GoogleComputeRegionDiskSourceSnapshotEncryptionKey.builder()
//  .kmsKeyName(java.lang.String)
//  .rawKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#kms_key_name GoogleComputeRegionDisk#kms_key_name}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#raw_key GoogleComputeRegionDisk#raw_key}

---

### GoogleComputeRegionDiskTimeouts <a name="GoogleComputeRegionDiskTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskTimeouts;

GoogleComputeRegionDiskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#create GoogleComputeRegionDisk#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#delete GoogleComputeRegionDisk#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#update GoogleComputeRegionDisk#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#create GoogleComputeRegionDisk#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#delete GoogleComputeRegionDisk#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_compute_region_disk#update GoogleComputeRegionDisk#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeRegionDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference;

new GoogleComputeRegionDiskDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionDiskDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskDiskEncryptionKey">GoogleComputeRegionDiskDiskEncryptionKey</a>

---


### GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference;

new GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```java
public void resetRawKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```java
public java.lang.String getRawKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionDiskSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskSourceSnapshotEncryptionKey">GoogleComputeRegionDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeRegionDiskTimeoutsOutputReference <a name="GoogleComputeRegionDiskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_disk.GoogleComputeRegionDiskTimeoutsOutputReference;

new GoogleComputeRegionDiskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDisk.GoogleComputeRegionDiskTimeouts">GoogleComputeRegionDiskTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



