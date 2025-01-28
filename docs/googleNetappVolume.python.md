# `googleNetappVolume` Submodule <a name="`googleNetappVolume` Submodule" id="@cdktf/provider-google-beta.googleNetappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolume <a name="GoogleNetappVolume" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  protocols: typing.List[str],
  share_name: str,
  storage_pool: str,
  backup_config: GoogleNetappVolumeBackupConfig = None,
  deletion_policy: str = None,
  description: str = None,
  export_policy: GoogleNetappVolumeExportPolicy = None,
  id: str = None,
  kerberos_enabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  large_capacity: typing.Union[bool, IResolvable] = None,
  multiple_endpoints: typing.Union[bool, IResolvable] = None,
  project: str = None,
  restore_parameters: GoogleNetappVolumeRestoreParameters = None,
  restricted_actions: typing.List[str] = None,
  security_style: str = None,
  smb_settings: typing.List[str] = None,
  snapshot_directory: typing.Union[bool, IResolvable] = None,
  snapshot_policy: GoogleNetappVolumeSnapshotPolicy = None,
  tiering_policy: GoogleNetappVolumeTieringPolicy = None,
  timeouts: GoogleNetappVolumeTimeouts = None,
  unix_permissions: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.shareName">share_name</a></code> | <code>str</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.storagePool">storage_pool</a></code> | <code>str</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.securityStyle">security_style</a></code> | <code>str</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.unixPermissions">unix_permissions</a></code> | <code>str</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.capacityGib"></a>

- *Type:* str

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.location"></a>

- *Type:* str

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.name"></a>

- *Type:* str

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.shareName"></a>

- *Type:* str

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.storagePool"></a>

- *Type:* str

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `export_policy`<sup>Optional</sup> <a name="export_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.exportPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_enabled`<sup>Optional</sup> <a name="kerberos_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.kerberosEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `large_capacity`<sup>Optional</sup> <a name="large_capacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.largeCapacity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}

---

##### `multiple_endpoints`<sup>Optional</sup> <a name="multiple_endpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.multipleEndpoints"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}.

---

##### `restore_parameters`<sup>Optional</sup> <a name="restore_parameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.restoreParameters"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}

---

##### `restricted_actions`<sup>Optional</sup> <a name="restricted_actions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.restrictedActions"></a>

- *Type:* typing.List[str]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.securityStyle"></a>

- *Type:* str

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}

---

##### `smb_settings`<sup>Optional</sup> <a name="smb_settings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.smbSettings"></a>

- *Type:* typing.List[str]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}

---

##### `snapshot_directory`<sup>Optional</sup> <a name="snapshot_directory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.snapshotDirectory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}

---

##### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.snapshotPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.tieringPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}

---

##### `unix_permissions`<sup>Optional</sup> <a name="unix_permissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.unixPermissions"></a>

- *Type:* str

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig">put_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy">put_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters">put_restore_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy">put_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy">put_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig">reset_backup_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy">reset_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled">reset_kerberos_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity">reset_large_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints">reset_multiple_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters">reset_restore_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions">reset_restricted_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle">reset_security_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings">reset_smb_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory">reset_snapshot_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy">reset_snapshot_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy">reset_tiering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions">reset_unix_permissions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_config` <a name="put_backup_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig"></a>

```python
def put_backup_config(
  backup_policies: typing.List[str] = None,
  backup_vault: str = None,
  scheduled_backup_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `backup_policies`<sup>Optional</sup> <a name="backup_policies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.backupPolicies"></a>

- *Type:* typing.List[str]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}

---

###### `backup_vault`<sup>Optional</sup> <a name="backup_vault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.backupVault"></a>

- *Type:* str

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}

---

###### `scheduled_backup_enabled`<sup>Optional</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.scheduledBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}

---

##### `put_export_policy` <a name="put_export_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy"></a>

```python
def put_export_policy(
  rules: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}

---

##### `put_restore_parameters` <a name="put_restore_parameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters"></a>

```python
def put_restore_parameters(
  source_backup: str = None,
  source_snapshot: str = None
) -> None
```

###### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters.parameter.sourceBackup"></a>

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters.parameter.sourceSnapshot"></a>

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}

---

##### `put_snapshot_policy` <a name="put_snapshot_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy"></a>

```python
def put_snapshot_policy(
  daily_schedule: GoogleNetappVolumeSnapshotPolicyDailySchedule = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hourly_schedule: GoogleNetappVolumeSnapshotPolicyHourlySchedule = None,
  monthly_schedule: GoogleNetappVolumeSnapshotPolicyMonthlySchedule = None,
  weekly_schedule: GoogleNetappVolumeSnapshotPolicyWeeklySchedule = None
) -> None
```

###### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.dailySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}

---

###### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.hourlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}

---

###### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.monthlySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}

---

###### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.weeklySchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}

---

##### `put_tiering_policy` <a name="put_tiering_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy"></a>

```python
def put_tiering_policy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
) -> None
```

###### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy.parameter.coolingThresholdDays"></a>

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 7-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}

---

###### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy.parameter.tierAction"></a>

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}.

---

##### `reset_backup_config` <a name="reset_backup_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig"></a>

```python
def reset_backup_config() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_export_policy` <a name="reset_export_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy"></a>

```python
def reset_export_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kerberos_enabled` <a name="reset_kerberos_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled"></a>

```python
def reset_kerberos_enabled() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_large_capacity` <a name="reset_large_capacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity"></a>

```python
def reset_large_capacity() -> None
```

##### `reset_multiple_endpoints` <a name="reset_multiple_endpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints"></a>

```python
def reset_multiple_endpoints() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restore_parameters` <a name="reset_restore_parameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters"></a>

```python
def reset_restore_parameters() -> None
```

##### `reset_restricted_actions` <a name="reset_restricted_actions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions"></a>

```python
def reset_restricted_actions() -> None
```

##### `reset_security_style` <a name="reset_security_style" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle"></a>

```python
def reset_security_style() -> None
```

##### `reset_smb_settings` <a name="reset_smb_settings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings"></a>

```python
def reset_smb_settings() -> None
```

##### `reset_snapshot_directory` <a name="reset_snapshot_directory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory"></a>

```python
def reset_snapshot_directory() -> None
```

##### `reset_snapshot_policy` <a name="reset_snapshot_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy"></a>

```python
def reset_snapshot_policy() -> None
```

##### `reset_tiering_policy` <a name="reset_tiering_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy"></a>

```python
def reset_tiering_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unix_permissions` <a name="reset_unix_permissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions"></a>

```python
def reset_unix_permissions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetappVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory">active_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib">cold_tier_size_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication">has_replication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig">kms_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled">ldap_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange">psa_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone">replica_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib">used_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput">backup_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput">capacity_gib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput">export_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput">kerberos_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput">large_capacity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput">multiple_endpoints_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput">restore_parameters_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput">restricted_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput">security_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput">smb_settings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput">snapshot_directory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput">snapshot_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput">tiering_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput">unix_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib">capacity_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions">unix_permissions</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory"></a>

```python
active_directory: str
```

- *Type:* str

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig"></a>

```python
backup_config: GoogleNetappVolumeBackupConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a>

---

##### `cold_tier_size_gib`<sup>Required</sup> <a name="cold_tier_size_gib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib"></a>

```python
cold_tier_size_gib: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `export_policy`<sup>Required</sup> <a name="export_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy"></a>

```python
export_policy: GoogleNetappVolumeExportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a>

---

##### `has_replication`<sup>Required</sup> <a name="has_replication" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication"></a>

```python
has_replication: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_config`<sup>Required</sup> <a name="kms_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig"></a>

```python
kms_config: str
```

- *Type:* str

---

##### `ldap_enabled`<sup>Required</sup> <a name="ldap_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled"></a>

```python
ldap_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions"></a>

```python
mount_options: GoogleNetappVolumeMountOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `psa_range`<sup>Required</sup> <a name="psa_range" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange"></a>

```python
psa_range: str
```

- *Type:* str

---

##### `replica_zone`<sup>Required</sup> <a name="replica_zone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone"></a>

```python
replica_zone: str
```

- *Type:* str

---

##### `restore_parameters`<sup>Required</sup> <a name="restore_parameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters"></a>

```python
restore_parameters: GoogleNetappVolumeRestoreParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a>

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

##### `snapshot_policy`<sup>Required</sup> <a name="snapshot_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy"></a>

```python
snapshot_policy: GoogleNetappVolumeSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy"></a>

```python
tiering_policy: GoogleNetappVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a>

---

##### `used_gib`<sup>Required</sup> <a name="used_gib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib"></a>

```python
used_gib: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `backup_config_input`<sup>Optional</sup> <a name="backup_config_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput"></a>

```python
backup_config_input: GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `capacity_gib_input`<sup>Optional</sup> <a name="capacity_gib_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput"></a>

```python
capacity_gib_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `export_policy_input`<sup>Optional</sup> <a name="export_policy_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput"></a>

```python
export_policy_input: GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kerberos_enabled_input`<sup>Optional</sup> <a name="kerberos_enabled_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput"></a>

```python
kerberos_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `large_capacity_input`<sup>Optional</sup> <a name="large_capacity_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput"></a>

```python
large_capacity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multiple_endpoints_input`<sup>Optional</sup> <a name="multiple_endpoints_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput"></a>

```python
multiple_endpoints_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restore_parameters_input`<sup>Optional</sup> <a name="restore_parameters_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput"></a>

```python
restore_parameters_input: GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `restricted_actions_input`<sup>Optional</sup> <a name="restricted_actions_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput"></a>

```python
restricted_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_style_input`<sup>Optional</sup> <a name="security_style_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput"></a>

```python
security_style_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `smb_settings_input`<sup>Optional</sup> <a name="smb_settings_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput"></a>

```python
smb_settings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_directory_input`<sup>Optional</sup> <a name="snapshot_directory_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput"></a>

```python
snapshot_directory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_policy_input`<sup>Optional</sup> <a name="snapshot_policy_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput"></a>

```python
snapshot_policy_input: GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `tiering_policy_input`<sup>Optional</sup> <a name="tiering_policy_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput"></a>

```python
tiering_policy_input: GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetappVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>]

---

##### `unix_permissions_input`<sup>Optional</sup> <a name="unix_permissions_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput"></a>

```python
unix_permissions_input: str
```

- *Type:* str

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kerberos_enabled`<sup>Required</sup> <a name="kerberos_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled"></a>

```python
kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `large_capacity`<sup>Required</sup> <a name="large_capacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity"></a>

```python
large_capacity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multiple_endpoints`<sup>Required</sup> <a name="multiple_endpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints"></a>

```python
multiple_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_actions`<sup>Required</sup> <a name="restricted_actions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions"></a>

```python
restricted_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `smb_settings`<sup>Required</sup> <a name="smb_settings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings"></a>

```python
smb_settings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_directory`<sup>Required</sup> <a name="snapshot_directory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory"></a>

```python
snapshot_directory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `unix_permissions`<sup>Required</sup> <a name="unix_permissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions"></a>

```python
unix_permissions: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeBackupConfig <a name="GoogleNetappVolumeBackupConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeBackupConfig(
  backup_policies: typing.List[str] = None,
  backup_vault: str = None,
  scheduled_backup_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies">backup_policies</a></code> | <code>typing.List[str]</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault">backup_vault</a></code> | <code>str</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled">scheduled_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `backup_policies`<sup>Optional</sup> <a name="backup_policies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies"></a>

```python
backup_policies: typing.List[str]
```

- *Type:* typing.List[str]

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}

---

##### `backup_vault`<sup>Optional</sup> <a name="backup_vault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}

---

##### `scheduled_backup_enabled`<sup>Optional</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```python
scheduled_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}

---

### GoogleNetappVolumeConfig <a name="GoogleNetappVolumeConfig" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  protocols: typing.List[str],
  share_name: str,
  storage_pool: str,
  backup_config: GoogleNetappVolumeBackupConfig = None,
  deletion_policy: str = None,
  description: str = None,
  export_policy: GoogleNetappVolumeExportPolicy = None,
  id: str = None,
  kerberos_enabled: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  large_capacity: typing.Union[bool, IResolvable] = None,
  multiple_endpoints: typing.Union[bool, IResolvable] = None,
  project: str = None,
  restore_parameters: GoogleNetappVolumeRestoreParameters = None,
  restricted_actions: typing.List[str] = None,
  security_style: str = None,
  smb_settings: typing.List[str] = None,
  snapshot_directory: typing.Union[bool, IResolvable] = None,
  snapshot_policy: GoogleNetappVolumeSnapshotPolicy = None,
  tiering_policy: GoogleNetappVolumeTieringPolicy = None,
  timeouts: GoogleNetappVolumeTimeouts = None,
  unix_permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location">location</a></code> | <code>str</code> | Name of the pool location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name">name</a></code> | <code>str</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | The protocol of the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName">share_name</a></code> | <code>str</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool">storage_pool</a></code> | <code>str</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig">backup_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the volume should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy">export_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled">kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity">large_capacity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints">multiple_endpoints</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters">restore_parameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions">restricted_actions</a></code> | <code>typing.List[str]</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle">security_style</a></code> | <code>str</code> | Security Style of the Volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings">smb_settings</a></code> | <code>typing.List[str]</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory">snapshot_directory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy">snapshot_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions">unix_permissions</a></code> | <code>str</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}

---

##### `backup_config`<sup>Optional</sup> <a name="backup_config" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig"></a>

```python
backup_config: GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine if the volume should be deleted forcefully.

Volumes may have nested snapshot resources. Deleting such a volume will fail.
Setting this parameter to FORCE will delete volumes including nested snapshots.
Possible values: DEFAULT, FORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `export_policy`<sup>Optional</sup> <a name="export_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy"></a>

```python
export_policy: GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_enabled`<sup>Optional</sup> <a name="kerberos_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled"></a>

```python
kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `large_capacity`<sup>Optional</sup> <a name="large_capacity" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity"></a>

```python
large_capacity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}

---

##### `multiple_endpoints`<sup>Optional</sup> <a name="multiple_endpoints" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints"></a>

```python
multiple_endpoints: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}.

---

##### `restore_parameters`<sup>Optional</sup> <a name="restore_parameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters"></a>

```python
restore_parameters: GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}

---

##### `restricted_actions`<sup>Optional</sup> <a name="restricted_actions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions"></a>

```python
restricted_actions: typing.List[str]
```

- *Type:* typing.List[str]

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}

---

##### `security_style`<sup>Optional</sup> <a name="security_style" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}

---

##### `smb_settings`<sup>Optional</sup> <a name="smb_settings" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings"></a>

```python
smb_settings: typing.List[str]
```

- *Type:* typing.List[str]

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}

---

##### `snapshot_directory`<sup>Optional</sup> <a name="snapshot_directory" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory"></a>

```python
snapshot_directory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}

---

##### `snapshot_policy`<sup>Optional</sup> <a name="snapshot_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy"></a>

```python
snapshot_policy: GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}

---

##### `tiering_policy`<sup>Optional</sup> <a name="tiering_policy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy"></a>

```python
tiering_policy: GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts"></a>

```python
timeouts: GoogleNetappVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}

---

##### `unix_permissions`<sup>Optional</sup> <a name="unix_permissions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions"></a>

```python
unix_permissions: str
```

- *Type:* str

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}

---

### GoogleNetappVolumeExportPolicy <a name="GoogleNetappVolumeExportPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeExportPolicy(
  rules: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}

---

### GoogleNetappVolumeExportPolicyRules <a name="GoogleNetappVolumeExportPolicyRules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeExportPolicyRules(
  access_type: str = None,
  allowed_clients: str = None,
  has_root_access: str = None,
  kerberos5_i_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_i_read_write: typing.Union[bool, IResolvable] = None,
  kerberos5_p_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_p_read_write: typing.Union[bool, IResolvable] = None,
  kerberos5_read_only: typing.Union[bool, IResolvable] = None,
  kerberos5_read_write: typing.Union[bool, IResolvable] = None,
  nfsv3: typing.Union[bool, IResolvable] = None,
  nfsv4: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType">access_type</a></code> | <code>str</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients">allowed_clients</a></code> | <code>str</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess">has_root_access</a></code> | <code>str</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly">kerberos5_i_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite">kerberos5_i_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly">kerberos5_p_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite">kerberos5_p_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly">kerberos5_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite">kerberos5_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3">nfsv3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4">nfsv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable to apply the export rule to NFSV4.1 clients. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#access_type GoogleNetappVolume#access_type}

---

##### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#allowed_clients GoogleNetappVolume#allowed_clients}

---

##### `has_root_access`<sup>Optional</sup> <a name="has_root_access" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```python
has_root_access: str
```

- *Type:* str

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#has_root_access GoogleNetappVolume#has_root_access}

---

##### `kerberos5_i_read_only`<sup>Optional</sup> <a name="kerberos5_i_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```python
kerberos5_i_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5i_read_only GoogleNetappVolume#kerberos5i_read_only}

---

##### `kerberos5_i_read_write`<sup>Optional</sup> <a name="kerberos5_i_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```python
kerberos5_i_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5i_read_write GoogleNetappVolume#kerberos5i_read_write}

---

##### `kerberos5_p_read_only`<sup>Optional</sup> <a name="kerberos5_p_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```python
kerberos5_p_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5p_read_only GoogleNetappVolume#kerberos5p_read_only}

---

##### `kerberos5_p_read_write`<sup>Optional</sup> <a name="kerberos5_p_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```python
kerberos5_p_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5p_read_write GoogleNetappVolume#kerberos5p_read_write}

---

##### `kerberos5_read_only`<sup>Optional</sup> <a name="kerberos5_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```python
kerberos5_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5_read_only GoogleNetappVolume#kerberos5_read_only}

---

##### `kerberos5_read_write`<sup>Optional</sup> <a name="kerberos5_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```python
kerberos5_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#kerberos5_read_write GoogleNetappVolume#kerberos5_read_write}

---

##### `nfsv3`<sup>Optional</sup> <a name="nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3"></a>

```python
nfsv3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#nfsv3 GoogleNetappVolume#nfsv3}

---

##### `nfsv4`<sup>Optional</sup> <a name="nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4"></a>

```python
nfsv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#nfsv4 GoogleNetappVolume#nfsv4}

---

### GoogleNetappVolumeMountOptions <a name="GoogleNetappVolumeMountOptions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeMountOptions()
```


### GoogleNetappVolumeRestoreParameters <a name="GoogleNetappVolumeRestoreParameters" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeRestoreParameters(
  source_backup: str = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup">source_backup</a></code> | <code>str</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `source_backup`<sup>Optional</sup> <a name="source_backup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}

---

### GoogleNetappVolumeSnapshotPolicy <a name="GoogleNetappVolumeSnapshotPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicy(
  daily_schedule: GoogleNetappVolumeSnapshotPolicyDailySchedule = None,
  enabled: typing.Union[bool, IResolvable] = None,
  hourly_schedule: GoogleNetappVolumeSnapshotPolicyHourlySchedule = None,
  monthly_schedule: GoogleNetappVolumeSnapshotPolicyMonthlySchedule = None,
  weekly_schedule: GoogleNetappVolumeSnapshotPolicyWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```python
daily_schedule: GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}

---

##### `hourly_schedule`<sup>Optional</sup> <a name="hourly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```python
hourly_schedule: GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```python
monthly_schedule: GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```python
weekly_schedule: GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}

---

### GoogleNetappVolumeSnapshotPolicyDailySchedule <a name="GoogleNetappVolumeSnapshotPolicyDailySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule(
  snapshots_to_keep: typing.Union[int, float],
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyHourlySchedule <a name="GoogleNetappVolumeSnapshotPolicyHourlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule(
  snapshots_to_keep: typing.Union[int, float],
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyMonthlySchedule <a name="GoogleNetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule(
  snapshots_to_keep: typing.Union[int, float],
  days_of_month: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">days_of_month</a></code> | <code>str</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```python
days_of_month: str
```

- *Type:* str

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyWeeklySchedule <a name="GoogleNetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule(
  snapshots_to_keep: typing.Union[int, float],
  day: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day">day</a></code> | <code>str</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```python
day: str
```

- *Type:* str

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeTieringPolicy <a name="GoogleNetappVolumeTieringPolicy" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeTieringPolicy(
  cooling_threshold_days: typing.Union[int, float] = None,
  tier_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction">tier_action</a></code> | <code>str</code> | Optional. |

---

##### `cooling_threshold_days`<sup>Optional</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 7-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}

---

##### `tier_action`<sup>Optional</sup> <a name="tier_action" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}

---

### GoogleNetappVolumeTimeouts <a name="GoogleNetappVolumeTimeouts" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeBackupConfigOutputReference <a name="GoogleNetappVolumeBackupConfigOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies">reset_backup_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault">reset_backup_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">reset_scheduled_backup_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_policies` <a name="reset_backup_policies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```python
def reset_backup_policies() -> None
```

##### `reset_backup_vault` <a name="reset_backup_vault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```python
def reset_backup_vault() -> None
```

##### `reset_scheduled_backup_enabled` <a name="reset_scheduled_backup_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```python
def reset_scheduled_backup_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">backup_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput">backup_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">scheduled_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies">backup_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault">backup_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">scheduled_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_policies_input`<sup>Optional</sup> <a name="backup_policies_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```python
backup_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_vault_input`<sup>Optional</sup> <a name="backup_vault_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```python
backup_vault_input: str
```

- *Type:* str

---

##### `scheduled_backup_enabled_input`<sup>Optional</sup> <a name="scheduled_backup_enabled_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```python
scheduled_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_policies`<sup>Required</sup> <a name="backup_policies" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```python
backup_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_vault`<sup>Required</sup> <a name="backup_vault" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```python
backup_vault: str
```

- *Type:* str

---

##### `scheduled_backup_enabled`<sup>Required</sup> <a name="scheduled_backup_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```python
scheduled_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---


### GoogleNetappVolumeExportPolicyOutputReference <a name="GoogleNetappVolumeExportPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules"></a>

```python
rules: GoogleNetappVolumeExportPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---


### GoogleNetappVolumeExportPolicyRulesList <a name="GoogleNetappVolumeExportPolicyRulesList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetappVolumeExportPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]]

---


### GoogleNetappVolumeExportPolicyRulesOutputReference <a name="GoogleNetappVolumeExportPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">reset_allowed_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">reset_has_root_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">reset_kerberos5_i_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">reset_kerberos5_i_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">reset_kerberos5_p_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">reset_kerberos5_p_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">reset_kerberos5_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">reset_kerberos5_read_write</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3">reset_nfsv3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4">reset_nfsv4</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_allowed_clients` <a name="reset_allowed_clients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```python
def reset_allowed_clients() -> None
```

##### `reset_has_root_access` <a name="reset_has_root_access" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```python
def reset_has_root_access() -> None
```

##### `reset_kerberos5_i_read_only` <a name="reset_kerberos5_i_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```python
def reset_kerberos5_i_read_only() -> None
```

##### `reset_kerberos5_i_read_write` <a name="reset_kerberos5_i_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```python
def reset_kerberos5_i_read_write() -> None
```

##### `reset_kerberos5_p_read_only` <a name="reset_kerberos5_p_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```python
def reset_kerberos5_p_read_only() -> None
```

##### `reset_kerberos5_p_read_write` <a name="reset_kerberos5_p_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```python
def reset_kerberos5_p_read_write() -> None
```

##### `reset_kerberos5_read_only` <a name="reset_kerberos5_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```python
def reset_kerberos5_read_only() -> None
```

##### `reset_kerberos5_read_write` <a name="reset_kerberos5_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```python
def reset_kerberos5_read_write() -> None
```

##### `reset_nfsv3` <a name="reset_nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```python
def reset_nfsv3() -> None
```

##### `reset_nfsv4` <a name="reset_nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```python
def reset_nfsv4() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">has_root_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">kerberos5_i_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">kerberos5_i_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">kerberos5_p_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">kerberos5_p_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">kerberos5_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">kerberos5_read_write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">nfsv3_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">nfsv4_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients">allowed_clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">has_root_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">kerberos5_i_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">kerberos5_i_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">kerberos5_p_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">kerberos5_p_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">kerberos5_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">kerberos5_read_write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3">nfsv3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4">nfsv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: str
```

- *Type:* str

---

##### `has_root_access_input`<sup>Optional</sup> <a name="has_root_access_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```python
has_root_access_input: str
```

- *Type:* str

---

##### `kerberos5_i_read_only_input`<sup>Optional</sup> <a name="kerberos5_i_read_only_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```python
kerberos5_i_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_i_read_write_input`<sup>Optional</sup> <a name="kerberos5_i_read_write_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```python
kerberos5_i_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_only_input`<sup>Optional</sup> <a name="kerberos5_p_read_only_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```python
kerberos5_p_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_write_input`<sup>Optional</sup> <a name="kerberos5_p_read_write_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```python
kerberos5_p_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_only_input`<sup>Optional</sup> <a name="kerberos5_read_only_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```python
kerberos5_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_write_input`<sup>Optional</sup> <a name="kerberos5_read_write_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```python
kerberos5_read_write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv3_input`<sup>Optional</sup> <a name="nfsv3_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```python
nfsv3_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv4_input`<sup>Optional</sup> <a name="nfsv4_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```python
nfsv4_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

---

##### `has_root_access`<sup>Required</sup> <a name="has_root_access" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```python
has_root_access: str
```

- *Type:* str

---

##### `kerberos5_i_read_only`<sup>Required</sup> <a name="kerberos5_i_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```python
kerberos5_i_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_i_read_write`<sup>Required</sup> <a name="kerberos5_i_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```python
kerberos5_i_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_only`<sup>Required</sup> <a name="kerberos5_p_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```python
kerberos5_p_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_p_read_write`<sup>Required</sup> <a name="kerberos5_p_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```python
kerberos5_p_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_only`<sup>Required</sup> <a name="kerberos5_read_only" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```python
kerberos5_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos5_read_write`<sup>Required</sup> <a name="kerberos5_read_write" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```python
kerberos5_read_write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv3`<sup>Required</sup> <a name="nfsv3" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```python
nfsv3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nfsv4`<sup>Required</sup> <a name="nfsv4" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```python
nfsv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetappVolumeExportPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules">GoogleNetappVolumeExportPolicyRules</a>]

---


### GoogleNetappVolumeMountOptionsList <a name="GoogleNetappVolumeMountOptionsList" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeMountOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetappVolumeMountOptionsOutputReference <a name="GoogleNetappVolumeMountOptionsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export">export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull">export_full</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions">instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export"></a>

```python
export: str
```

- *Type:* str

---

##### `export_full`<sup>Required</sup> <a name="export_full" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```python
export_full: str
```

- *Type:* str

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions"></a>

```python
instructions: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a>

---


### GoogleNetappVolumeRestoreParametersOutputReference <a name="GoogleNetappVolumeRestoreParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup">reset_source_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_backup` <a name="reset_source_backup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```python
def reset_source_backup() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">source_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup">source_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_backup_input`<sup>Optional</sup> <a name="source_backup_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```python
source_backup_input: str
```

- *Type:* str

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `source_backup`<sup>Required</sup> <a name="source_backup" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```python
source_backup: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---


### GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">reset_days_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_of_month` <a name="reset_days_of_month" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```python
def reset_days_of_month() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```python
days_of_month: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyOutputReference <a name="GoogleNetappVolumeSnapshotPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule">put_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">put_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">put_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">reset_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">reset_hourly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">reset_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_daily_schedule` <a name="put_daily_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```python
def put_daily_schedule(
  snapshots_to_keep: typing.Union[int, float],
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

##### `put_hourly_schedule` <a name="put_hourly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```python
def put_hourly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

##### `put_monthly_schedule` <a name="put_monthly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```python
def put_monthly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  days_of_month: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

###### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.daysOfMonth"></a>

- *Type:* str

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  snapshots_to_keep: typing.Union[int, float],
  day: str = None,
  hour: typing.Union[int, float] = None,
  minute: typing.Union[int, float] = None
) -> None
```

###### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.snapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.day"></a>

- *Type:* str

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

###### `minute`<sup>Optional</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.minute"></a>

- *Type:* typing.Union[int, float]

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

##### `reset_daily_schedule` <a name="reset_daily_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```python
def reset_daily_schedule() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_hourly_schedule` <a name="reset_hourly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```python
def reset_hourly_schedule() -> None
```

##### `reset_monthly_schedule` <a name="reset_monthly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```python
def reset_monthly_schedule() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">hourly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">daily_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">hourly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">monthly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```python
daily_schedule: GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `hourly_schedule`<sup>Required</sup> <a name="hourly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```python
hourly_schedule: GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```python
monthly_schedule: GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `daily_schedule_input`<sup>Optional</sup> <a name="daily_schedule_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```python
daily_schedule_input: GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hourly_schedule_input`<sup>Optional</sup> <a name="hourly_schedule_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```python
hourly_schedule_input: GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `monthly_schedule_input`<sup>Optional</sup> <a name="monthly_schedule_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```python
monthly_schedule_input: GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---


### GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">reset_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_minute` <a name="reset_minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```python
def reset_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_input`<sup>Optional</sup> <a name="minute_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```python
minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep_input`<sup>Optional</sup> <a name="snapshots_to_keep_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```python
snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshots_to_keep`<sup>Required</sup> <a name="snapshots_to_keep" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```python
snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### GoogleNetappVolumeTieringPolicyOutputReference <a name="GoogleNetappVolumeTieringPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">reset_cooling_threshold_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction">reset_tier_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooling_threshold_days` <a name="reset_cooling_threshold_days" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```python
def reset_cooling_threshold_days() -> None
```

##### `reset_tier_action` <a name="reset_tier_action" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```python
def reset_tier_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">cooling_threshold_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput">tier_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">cooling_threshold_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction">tier_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_threshold_days_input`<sup>Optional</sup> <a name="cooling_threshold_days_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```python
cooling_threshold_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action_input`<sup>Optional</sup> <a name="tier_action_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```python
tier_action_input: str
```

- *Type:* str

---

##### `cooling_threshold_days`<sup>Required</sup> <a name="cooling_threshold_days" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```python
cooling_threshold_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tier_action`<sup>Required</sup> <a name="tier_action" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```python
tier_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---


### GoogleNetappVolumeTimeoutsOutputReference <a name="GoogleNetappVolumeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_volume

googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetappVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>]

---



