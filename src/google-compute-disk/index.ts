// https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * The accessMode of the disk.
  * For example:
  * * READ_WRITE_SINGLE
  * * READ_WRITE_MANY
  * * READ_ONLY_SINGLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#access_mode GoogleComputeDisk#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#architecture GoogleComputeDisk#architecture}
  */
  readonly architecture?: string;
  /**
  * If set to true, a snapshot of the disk will be created before it is destroyed.
  * If your disk is encrypted with customer managed encryption keys these will be reused for the snapshot creation.
  * The name of the snapshot by default will be '{{disk-name}}-YYYYMMDD-HHmm'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#create_snapshot_before_destroy GoogleComputeDisk#create_snapshot_before_destroy}
  */
  readonly createSnapshotBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * This will set a custom name prefix for the snapshot that's created when the disk is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#create_snapshot_before_destroy_prefix GoogleComputeDisk#create_snapshot_before_destroy_prefix}
  */
  readonly createSnapshotBeforeDestroyPrefix?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#description GoogleComputeDisk#description}
  */
  readonly description?: string;
  /**
  * Whether this disk is using confidential compute mode.
  * Note: Only supported on hyperdisk skus, disk_encryption_key is required when setting to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#enable_confidential_compute GoogleComputeDisk#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#id GoogleComputeDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image from which to initialize this disk. This can be
  * one of: the image's 'self_link', 'projects/{project}/global/images/{image}',
  * 'projects/{project}/global/images/family/{family}', 'global/images/{image}',
  * 'global/images/family/{family}', 'family/{family}', '{project}/{family}',
  * '{project}/{image}', '{family}', or '{image}'. If referred by family, the
  * images names must include the family name. If they don't, use the
  * [google_compute_image data source](/docs/providers/google/d/compute_image.html).
  * For instance, the image 'centos-6-v20180104' includes its family name 'centos-6'.
  * These images can be referred by family name here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#image GoogleComputeDisk#image}
  */
  readonly image?: string;
  /**
  * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#interface GoogleComputeDisk#interface}
  */
  readonly interface?: string;
  /**
  * Labels to apply to this disk.  A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#labels GoogleComputeDisk#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Any applicable license URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#licenses GoogleComputeDisk#licenses}
  */
  readonly licenses?: string[];
  /**
  * Indicates whether or not the disk can be read/write attached to more than one instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#multi_writer GoogleComputeDisk#multi_writer}
  */
  readonly multiWriter?: boolean | cdktf.IResolvable;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#name GoogleComputeDisk#name}
  */
  readonly name: string;
  /**
  * Physical block size of the persistent disk, in bytes. If not present
  * in a request, a default value is used. Currently supported sizes
  * are 4096 and 16384, other sizes may be added in the future.
  * If an unsupported value is requested, the error message will list
  * the supported values for the caller's project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#physical_block_size_bytes GoogleComputeDisk#physical_block_size_bytes}
  */
  readonly physicalBlockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#project GoogleComputeDisk#project}
  */
  readonly project?: string;
  /**
  * Indicates how many IOPS must be provisioned for the disk.
  * Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
  * allows for an update of IOPS every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#provisioned_iops GoogleComputeDisk#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Indicates how much Throughput must be provisioned for the disk.
  * Note: Updating currently is only supported by hyperdisk skus without the need to delete and recreate the disk, hyperdisk
  * allows for an update of Throughput every 4 hours. To update your hyperdisk more frequently, you'll need to manually delete and recreate it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#provisioned_throughput GoogleComputeDisk#provisioned_throughput}
  */
  readonly provisionedThroughput?: number;
  /**
  * Resource policies applied to this disk for automatic snapshot creations.
  * 
  * ~>**NOTE** This value does not support updating the
  * resource policy, as resource policies can not be updated more than
  * one at a time. Use
  * ['google_compute_disk_resource_policy_attachment'](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_disk_resource_policy_attachment)
  * to allow for updating the resource policy attached to the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#resource_policies GoogleComputeDisk#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * Size of the persistent disk, specified in GB. You can specify this
  * field when creating a persistent disk using the 'image' or
  * 'snapshot' parameter, or specify it alone to create an empty
  * persistent disk.
  * 
  * If you specify this field along with 'image' or 'snapshot',
  * the value must not be less than the size of the image
  * or the size of the snapshot.
  * 
  * ~>**NOTE** If you change the size, Terraform updates the disk size
  * if upsizing is detected but recreates the disk if downsizing is requested.
  * You can add 'lifecycle.prevent_destroy' in the config to prevent destroying
  * and recreating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#size GoogleComputeDisk#size}
  */
  readonly size?: number;
  /**
  * The source snapshot used to create this disk. You can provide this as
  * a partial or full URL to the resource. If the snapshot is in another
  * project than this disk, you must supply a full URL. For example, the
  * following are valid values:
  * 
  * * 'https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot'
  * * 'projects/project/global/snapshots/snapshot'
  * * 'global/snapshots/snapshot'
  * * 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#snapshot GoogleComputeDisk#snapshot}
  */
  readonly snapshot?: string;
  /**
  * The source disk used to create this disk. You can provide this as a partial or full URL to the resource.
  * For example, the following are valid values:
  * 
  * * https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/disks/{disk}
  * * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/disks/{disk}
  * * projects/{project}/zones/{zone}/disks/{disk}
  * * projects/{project}/regions/{region}/disks/{disk}
  * * zones/{zone}/disks/{disk}
  * * regions/{region}/disks/{disk}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#source_disk GoogleComputeDisk#source_disk}
  */
  readonly sourceDisk?: string;
  /**
  * The source instant snapshot used to create this disk. You can provide this as a partial or full URL to the resource.
  * For example, the following are valid values:
  * 
  * * 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instantSnapshots/instantSnapshot'
  * * 'projects/project/zones/zone/instantSnapshots/instantSnapshot'
  * * 'zones/zone/instantSnapshots/instantSnapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#source_instant_snapshot GoogleComputeDisk#source_instant_snapshot}
  */
  readonly sourceInstantSnapshot?: string;
  /**
  * The full Google Cloud Storage URI where the disk image is stored.
  * This file must be a gzip-compressed tarball whose name ends in .tar.gz or virtual machine disk whose name ends in vmdk.
  * Valid URIs may start with gs:// or https://storage.googleapis.com/.
  * This flag is not optimized for creating multiple disks from a source storage object.
  * To create many disks from a source storage object, use gcloud compute images import instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#source_storage_object GoogleComputeDisk#source_storage_object}
  */
  readonly sourceStorageObject?: string;
  /**
  * The URL or the name of the storage pool in which the new disk is created.
  * For example:
  * * https://www.googleapis.com/compute/v1/projects/{project}/zones/{zone}/storagePools/{storagePool}
  * * /projects/{project}/zones/{zone}/storagePools/{storagePool}
  * * /zones/{zone}/storagePools/{storagePool}
  * * /{storagePool}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#storage_pool GoogleComputeDisk#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * URL of the disk type resource describing which disk type to use to
  * create the disk. Provide this when creating the disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#type GoogleComputeDisk#type}
  */
  readonly type?: string;
  /**
  * A reference to the zone where the disk resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#zone GoogleComputeDisk#zone}
  */
  readonly zone?: string;
  /**
  * async_primary_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#async_primary_disk GoogleComputeDisk#async_primary_disk}
  */
  readonly asyncPrimaryDisk?: GoogleComputeDiskAsyncPrimaryDisk;
  /**
  * disk_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#disk_encryption_key GoogleComputeDisk#disk_encryption_key}
  */
  readonly diskEncryptionKey?: GoogleComputeDiskDiskEncryptionKey;
  /**
  * guest_os_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#guest_os_features GoogleComputeDisk#guest_os_features}
  */
  readonly guestOsFeatures?: GoogleComputeDiskGuestOsFeatures[] | cdktf.IResolvable;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#params GoogleComputeDisk#params}
  */
  readonly params?: GoogleComputeDiskParams;
  /**
  * source_image_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#source_image_encryption_key GoogleComputeDisk#source_image_encryption_key}
  */
  readonly sourceImageEncryptionKey?: GoogleComputeDiskSourceImageEncryptionKey;
  /**
  * source_snapshot_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#source_snapshot_encryption_key GoogleComputeDisk#source_snapshot_encryption_key}
  */
  readonly sourceSnapshotEncryptionKey?: GoogleComputeDiskSourceSnapshotEncryptionKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#timeouts GoogleComputeDisk#timeouts}
  */
  readonly timeouts?: GoogleComputeDiskTimeouts;
}
export interface GoogleComputeDiskAsyncPrimaryDisk {
  /**
  * Primary disk for asynchronous disk replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#disk GoogleComputeDisk#disk}
  */
  readonly disk: string;
}

export function googleComputeDiskAsyncPrimaryDiskToTerraform(struct?: GoogleComputeDiskAsyncPrimaryDiskOutputReference | GoogleComputeDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.stringToTerraform(struct!.disk),
  }
}


export function googleComputeDiskAsyncPrimaryDiskToHclTerraform(struct?: GoogleComputeDiskAsyncPrimaryDiskOutputReference | GoogleComputeDiskAsyncPrimaryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskAsyncPrimaryDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeDiskAsyncPrimaryDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskAsyncPrimaryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk = value.disk;
    }
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }
}
export interface GoogleComputeDiskDiskEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
  * If absent, the Compute Engine Service Agent service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}
  */
  readonly rawKey?: string;
  /**
  * Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit
  * customer-supplied encryption key to either encrypt or decrypt
  * this resource. You can provide either the rawKey or the rsaEncryptedKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#rsa_encrypted_key GoogleComputeDisk#rsa_encrypted_key}
  */
  readonly rsaEncryptedKey?: string;
}

export function googleComputeDiskDiskEncryptionKeyToTerraform(struct?: GoogleComputeDiskDiskEncryptionKeyOutputReference | GoogleComputeDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
    rsa_encrypted_key: cdktf.stringToTerraform(struct!.rsaEncryptedKey),
  }
}


export function googleComputeDiskDiskEncryptionKeyToHclTerraform(struct?: GoogleComputeDiskDiskEncryptionKeyOutputReference | GoogleComputeDiskDiskEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsa_encrypted_key: {
      value: cdktf.stringToHclTerraform(struct!.rsaEncryptedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskDiskEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeDiskDiskEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    if (this._rsaEncryptedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEncryptedKey = this._rsaEncryptedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskDiskEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
      this._rsaEncryptedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
      this._rsaEncryptedKey = value.rsaEncryptedKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // rsa_encrypted_key - computed: false, optional: true, required: false
  private _rsaEncryptedKey?: string; 
  public get rsaEncryptedKey() {
    return this.getStringAttribute('rsa_encrypted_key');
  }
  public set rsaEncryptedKey(value: string) {
    this._rsaEncryptedKey = value;
  }
  public resetRsaEncryptedKey() {
    this._rsaEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEncryptedKeyInput() {
    return this._rsaEncryptedKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface GoogleComputeDiskGuestOsFeatures {
  /**
  * The type of supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#type GoogleComputeDisk#type}
  */
  readonly type: string;
}

export function googleComputeDiskGuestOsFeaturesToTerraform(struct?: GoogleComputeDiskGuestOsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeDiskGuestOsFeaturesToHclTerraform(struct?: GoogleComputeDiskGuestOsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskGuestOsFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleComputeDiskGuestOsFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskGuestOsFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleComputeDiskGuestOsFeaturesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeDiskGuestOsFeatures[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleComputeDiskGuestOsFeaturesOutputReference {
    return new GoogleComputeDiskGuestOsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeDiskParams {
  /**
  * Resource manager tags to be bound to the disk. Tag keys and values have the
  * same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
  * and values are in the format tagValues/456.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#resource_manager_tags GoogleComputeDisk#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function googleComputeDiskParamsToTerraform(struct?: GoogleComputeDiskParamsOutputReference | GoogleComputeDiskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function googleComputeDiskParamsToHclTerraform(struct?: GoogleComputeDiskParamsOutputReference | GoogleComputeDiskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeDiskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }
}
export interface GoogleComputeDiskSourceImageEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
  * If absent, the Compute Engine Service Agent service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function googleComputeDiskSourceImageEncryptionKeyToTerraform(struct?: GoogleComputeDiskSourceImageEncryptionKeyOutputReference | GoogleComputeDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}


export function googleComputeDiskSourceImageEncryptionKeyToHclTerraform(struct?: GoogleComputeDiskSourceImageEncryptionKeyOutputReference | GoogleComputeDiskSourceImageEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskSourceImageEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeDiskSourceImageEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskSourceImageEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface GoogleComputeDiskSourceSnapshotEncryptionKey {
  /**
  * The self link of the encryption key used to encrypt the disk. Also called KmsKeyName
  * in the cloud console. Your project's Compute Engine System service account
  * ('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_self_link GoogleComputeDisk#kms_key_self_link}
  */
  readonly kmsKeySelfLink?: string;
  /**
  * The service account used for the encryption request for the given KMS key.
  * If absent, the Compute Engine Service Agent service account is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#kms_key_service_account GoogleComputeDisk#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount?: string;
  /**
  * Specifies a 256-bit customer-supplied encryption key, encoded in
  * RFC 4648 base64 to either encrypt or decrypt this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#raw_key GoogleComputeDisk#raw_key}
  */
  readonly rawKey?: string;
}

export function googleComputeDiskSourceSnapshotEncryptionKeyToTerraform(struct?: GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference | GoogleComputeDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_self_link: cdktf.stringToTerraform(struct!.kmsKeySelfLink),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
    raw_key: cdktf.stringToTerraform(struct!.rawKey),
  }
}


export function googleComputeDiskSourceSnapshotEncryptionKeyToHclTerraform(struct?: GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference | GoogleComputeDiskSourceSnapshotEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_self_link: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeySelfLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_key: {
      value: cdktf.stringToHclTerraform(struct!.rawKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeDiskSourceSnapshotEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeySelfLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeySelfLink = this._kmsKeySelfLink;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    if (this._rawKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawKey = this._rawKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskSourceSnapshotEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeySelfLink = undefined;
      this._kmsKeyServiceAccount = undefined;
      this._rawKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeySelfLink = value.kmsKeySelfLink;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
      this._rawKey = value.rawKey;
    }
  }

  // kms_key_self_link - computed: false, optional: true, required: false
  private _kmsKeySelfLink?: string; 
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }
  public set kmsKeySelfLink(value: string) {
    this._kmsKeySelfLink = value;
  }
  public resetKmsKeySelfLink() {
    this._kmsKeySelfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeySelfLinkInput() {
    return this._kmsKeySelfLink;
  }

  // kms_key_service_account - computed: false, optional: true, required: false
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  public resetKmsKeyServiceAccount() {
    this._kmsKeyServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }

  // raw_key - computed: false, optional: true, required: false
  private _rawKey?: string; 
  public get rawKey() {
    return this.getStringAttribute('raw_key');
  }
  public set rawKey(value: string) {
    this._rawKey = value;
  }
  public resetRawKey() {
    this._rawKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawKeyInput() {
    return this._rawKey;
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}
export interface GoogleComputeDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#create GoogleComputeDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#delete GoogleComputeDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#update GoogleComputeDisk#update}
  */
  readonly update?: string;
}

export function googleComputeDiskTimeoutsToTerraform(struct?: GoogleComputeDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleComputeDiskTimeoutsToHclTerraform(struct?: GoogleComputeDiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeDiskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeDiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk google_compute_disk}
*/
export class GoogleComputeDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeDisk to import
  * @param importFromId The id of the existing GoogleComputeDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_disk google_compute_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeDiskConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_disk',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.27.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._architecture = config.architecture;
    this._createSnapshotBeforeDestroy = config.createSnapshotBeforeDestroy;
    this._createSnapshotBeforeDestroyPrefix = config.createSnapshotBeforeDestroyPrefix;
    this._description = config.description;
    this._enableConfidentialCompute = config.enableConfidentialCompute;
    this._id = config.id;
    this._image = config.image;
    this._interface = config.interface;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._multiWriter = config.multiWriter;
    this._name = config.name;
    this._physicalBlockSizeBytes = config.physicalBlockSizeBytes;
    this._project = config.project;
    this._provisionedIops = config.provisionedIops;
    this._provisionedThroughput = config.provisionedThroughput;
    this._resourcePolicies = config.resourcePolicies;
    this._size = config.size;
    this._snapshot = config.snapshot;
    this._sourceDisk = config.sourceDisk;
    this._sourceInstantSnapshot = config.sourceInstantSnapshot;
    this._sourceStorageObject = config.sourceStorageObject;
    this._storagePool = config.storagePool;
    this._type = config.type;
    this._zone = config.zone;
    this._asyncPrimaryDisk.internalValue = config.asyncPrimaryDisk;
    this._diskEncryptionKey.internalValue = config.diskEncryptionKey;
    this._guestOsFeatures.internalValue = config.guestOsFeatures;
    this._params.internalValue = config.params;
    this._sourceImageEncryptionKey.internalValue = config.sourceImageEncryptionKey;
    this._sourceSnapshotEncryptionKey.internalValue = config.sourceSnapshotEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // create_snapshot_before_destroy - computed: false, optional: true, required: false
  private _createSnapshotBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get createSnapshotBeforeDestroy() {
    return this.getBooleanAttribute('create_snapshot_before_destroy');
  }
  public set createSnapshotBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._createSnapshotBeforeDestroy = value;
  }
  public resetCreateSnapshotBeforeDestroy() {
    this._createSnapshotBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotBeforeDestroyInput() {
    return this._createSnapshotBeforeDestroy;
  }

  // create_snapshot_before_destroy_prefix - computed: false, optional: true, required: false
  private _createSnapshotBeforeDestroyPrefix?: string; 
  public get createSnapshotBeforeDestroyPrefix() {
    return this.getStringAttribute('create_snapshot_before_destroy_prefix');
  }
  public set createSnapshotBeforeDestroyPrefix(value: string) {
    this._createSnapshotBeforeDestroyPrefix = value;
  }
  public resetCreateSnapshotBeforeDestroyPrefix() {
    this._createSnapshotBeforeDestroyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotBeforeDestroyPrefixInput() {
    return this._createSnapshotBeforeDestroyPrefix;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_confidential_compute - computed: true, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_attach_timestamp - computed: true, optional: false, required: false
  public get lastAttachTimestamp() {
    return this.getStringAttribute('last_attach_timestamp');
  }

  // last_detach_timestamp - computed: true, optional: false, required: false
  public get lastDetachTimestamp() {
    return this.getStringAttribute('last_detach_timestamp');
  }

  // licenses - computed: true, optional: true, required: false
  private _licenses?: string[]; 
  public get licenses() {
    return this.getListAttribute('licenses');
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
  }

  // multi_writer - computed: false, optional: true, required: false
  private _multiWriter?: boolean | cdktf.IResolvable; 
  public get multiWriter() {
    return this.getBooleanAttribute('multi_writer');
  }
  public set multiWriter(value: boolean | cdktf.IResolvable) {
    this._multiWriter = value;
  }
  public resetMultiWriter() {
    this._multiWriter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiWriterInput() {
    return this._multiWriter;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // physical_block_size_bytes - computed: true, optional: true, required: false
  private _physicalBlockSizeBytes?: number; 
  public get physicalBlockSizeBytes() {
    return this.getNumberAttribute('physical_block_size_bytes');
  }
  public set physicalBlockSizeBytes(value: number) {
    this._physicalBlockSizeBytes = value;
  }
  public resetPhysicalBlockSizeBytes() {
    this._physicalBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalBlockSizeBytesInput() {
    return this._physicalBlockSizeBytes;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // provisioned_iops - computed: true, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // provisioned_throughput - computed: true, optional: true, required: false
  private _provisionedThroughput?: number; 
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }
  public set provisionedThroughput(value: number) {
    this._provisionedThroughput = value;
  }
  public resetProvisionedThroughput() {
    this._provisionedThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputInput() {
    return this._provisionedThroughput;
  }

  // resource_policies - computed: true, optional: true, required: false
  private _resourcePolicies?: string[]; 
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }
  public set resourcePolicies(value: string[]) {
    this._resourcePolicies = value;
  }
  public resetResourcePolicies() {
    this._resourcePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoliciesInput() {
    return this._resourcePolicies;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // source_disk - computed: false, optional: true, required: false
  private _sourceDisk?: string; 
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  public resetSourceDisk() {
    this._sourceDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk;
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }

  // source_image_id - computed: true, optional: false, required: false
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }

  // source_instant_snapshot - computed: false, optional: true, required: false
  private _sourceInstantSnapshot?: string; 
  public get sourceInstantSnapshot() {
    return this.getStringAttribute('source_instant_snapshot');
  }
  public set sourceInstantSnapshot(value: string) {
    this._sourceInstantSnapshot = value;
  }
  public resetSourceInstantSnapshot() {
    this._sourceInstantSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstantSnapshotInput() {
    return this._sourceInstantSnapshot;
  }

  // source_instant_snapshot_id - computed: true, optional: false, required: false
  public get sourceInstantSnapshotId() {
    return this.getStringAttribute('source_instant_snapshot_id');
  }

  // source_snapshot_id - computed: true, optional: false, required: false
  public get sourceSnapshotId() {
    return this.getStringAttribute('source_snapshot_id');
  }

  // source_storage_object - computed: false, optional: true, required: false
  private _sourceStorageObject?: string; 
  public get sourceStorageObject() {
    return this.getStringAttribute('source_storage_object');
  }
  public set sourceStorageObject(value: string) {
    this._sourceStorageObject = value;
  }
  public resetSourceStorageObject() {
    this._sourceStorageObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStorageObjectInput() {
    return this._sourceStorageObject;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // async_primary_disk - computed: false, optional: true, required: false
  private _asyncPrimaryDisk = new GoogleComputeDiskAsyncPrimaryDiskOutputReference(this, "async_primary_disk");
  public get asyncPrimaryDisk() {
    return this._asyncPrimaryDisk;
  }
  public putAsyncPrimaryDisk(value: GoogleComputeDiskAsyncPrimaryDisk) {
    this._asyncPrimaryDisk.internalValue = value;
  }
  public resetAsyncPrimaryDisk() {
    this._asyncPrimaryDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncPrimaryDiskInput() {
    return this._asyncPrimaryDisk.internalValue;
  }

  // disk_encryption_key - computed: false, optional: true, required: false
  private _diskEncryptionKey = new GoogleComputeDiskDiskEncryptionKeyOutputReference(this, "disk_encryption_key");
  public get diskEncryptionKey() {
    return this._diskEncryptionKey;
  }
  public putDiskEncryptionKey(value: GoogleComputeDiskDiskEncryptionKey) {
    this._diskEncryptionKey.internalValue = value;
  }
  public resetDiskEncryptionKey() {
    this._diskEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyInput() {
    return this._diskEncryptionKey.internalValue;
  }

  // guest_os_features - computed: false, optional: true, required: false
  private _guestOsFeatures = new GoogleComputeDiskGuestOsFeaturesList(this, "guest_os_features", true);
  public get guestOsFeatures() {
    return this._guestOsFeatures;
  }
  public putGuestOsFeatures(value: GoogleComputeDiskGuestOsFeatures[] | cdktf.IResolvable) {
    this._guestOsFeatures.internalValue = value;
  }
  public resetGuestOsFeatures() {
    this._guestOsFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestOsFeaturesInput() {
    return this._guestOsFeatures.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new GoogleComputeDiskParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: GoogleComputeDiskParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // source_image_encryption_key - computed: false, optional: true, required: false
  private _sourceImageEncryptionKey = new GoogleComputeDiskSourceImageEncryptionKeyOutputReference(this, "source_image_encryption_key");
  public get sourceImageEncryptionKey() {
    return this._sourceImageEncryptionKey;
  }
  public putSourceImageEncryptionKey(value: GoogleComputeDiskSourceImageEncryptionKey) {
    this._sourceImageEncryptionKey.internalValue = value;
  }
  public resetSourceImageEncryptionKey() {
    this._sourceImageEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageEncryptionKeyInput() {
    return this._sourceImageEncryptionKey.internalValue;
  }

  // source_snapshot_encryption_key - computed: false, optional: true, required: false
  private _sourceSnapshotEncryptionKey = new GoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference(this, "source_snapshot_encryption_key");
  public get sourceSnapshotEncryptionKey() {
    return this._sourceSnapshotEncryptionKey;
  }
  public putSourceSnapshotEncryptionKey(value: GoogleComputeDiskSourceSnapshotEncryptionKey) {
    this._sourceSnapshotEncryptionKey.internalValue = value;
  }
  public resetSourceSnapshotEncryptionKey() {
    this._sourceSnapshotEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotEncryptionKeyInput() {
    return this._sourceSnapshotEncryptionKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeDiskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      architecture: cdktf.stringToTerraform(this._architecture),
      create_snapshot_before_destroy: cdktf.booleanToTerraform(this._createSnapshotBeforeDestroy),
      create_snapshot_before_destroy_prefix: cdktf.stringToTerraform(this._createSnapshotBeforeDestroyPrefix),
      description: cdktf.stringToTerraform(this._description),
      enable_confidential_compute: cdktf.booleanToTerraform(this._enableConfidentialCompute),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      interface: cdktf.stringToTerraform(this._interface),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenses),
      multi_writer: cdktf.booleanToTerraform(this._multiWriter),
      name: cdktf.stringToTerraform(this._name),
      physical_block_size_bytes: cdktf.numberToTerraform(this._physicalBlockSizeBytes),
      project: cdktf.stringToTerraform(this._project),
      provisioned_iops: cdktf.numberToTerraform(this._provisionedIops),
      provisioned_throughput: cdktf.numberToTerraform(this._provisionedThroughput),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePolicies),
      size: cdktf.numberToTerraform(this._size),
      snapshot: cdktf.stringToTerraform(this._snapshot),
      source_disk: cdktf.stringToTerraform(this._sourceDisk),
      source_instant_snapshot: cdktf.stringToTerraform(this._sourceInstantSnapshot),
      source_storage_object: cdktf.stringToTerraform(this._sourceStorageObject),
      storage_pool: cdktf.stringToTerraform(this._storagePool),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      async_primary_disk: googleComputeDiskAsyncPrimaryDiskToTerraform(this._asyncPrimaryDisk.internalValue),
      disk_encryption_key: googleComputeDiskDiskEncryptionKeyToTerraform(this._diskEncryptionKey.internalValue),
      guest_os_features: cdktf.listMapper(googleComputeDiskGuestOsFeaturesToTerraform, true)(this._guestOsFeatures.internalValue),
      params: googleComputeDiskParamsToTerraform(this._params.internalValue),
      source_image_encryption_key: googleComputeDiskSourceImageEncryptionKeyToTerraform(this._sourceImageEncryptionKey.internalValue),
      source_snapshot_encryption_key: googleComputeDiskSourceSnapshotEncryptionKeyToTerraform(this._sourceSnapshotEncryptionKey.internalValue),
      timeouts: googleComputeDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_snapshot_before_destroy: {
        value: cdktf.booleanToHclTerraform(this._createSnapshotBeforeDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_snapshot_before_destroy_prefix: {
        value: cdktf.stringToHclTerraform(this._createSnapshotBeforeDestroyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_confidential_compute: {
        value: cdktf.booleanToHclTerraform(this._enableConfidentialCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      multi_writer: {
        value: cdktf.booleanToHclTerraform(this._multiWriter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_block_size_bytes: {
        value: cdktf.numberToHclTerraform(this._physicalBlockSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_iops: {
        value: cdktf.numberToHclTerraform(this._provisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provisioned_throughput: {
        value: cdktf.numberToHclTerraform(this._provisionedThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcePolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_disk: {
        value: cdktf.stringToHclTerraform(this._sourceDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instant_snapshot: {
        value: cdktf.stringToHclTerraform(this._sourceInstantSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_storage_object: {
        value: cdktf.stringToHclTerraform(this._sourceStorageObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pool: {
        value: cdktf.stringToHclTerraform(this._storagePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_primary_disk: {
        value: googleComputeDiskAsyncPrimaryDiskToHclTerraform(this._asyncPrimaryDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeDiskAsyncPrimaryDiskList",
      },
      disk_encryption_key: {
        value: googleComputeDiskDiskEncryptionKeyToHclTerraform(this._diskEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeDiskDiskEncryptionKeyList",
      },
      guest_os_features: {
        value: cdktf.listMapperHcl(googleComputeDiskGuestOsFeaturesToHclTerraform, true)(this._guestOsFeatures.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeDiskGuestOsFeaturesList",
      },
      params: {
        value: googleComputeDiskParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeDiskParamsList",
      },
      source_image_encryption_key: {
        value: googleComputeDiskSourceImageEncryptionKeyToHclTerraform(this._sourceImageEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeDiskSourceImageEncryptionKeyList",
      },
      source_snapshot_encryption_key: {
        value: googleComputeDiskSourceSnapshotEncryptionKeyToHclTerraform(this._sourceSnapshotEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeDiskSourceSnapshotEncryptionKeyList",
      },
      timeouts: {
        value: googleComputeDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
