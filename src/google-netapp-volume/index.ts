/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetappVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capacity of the volume (in GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}
  */
  readonly capacityGib: string;
  /**
  * Policy to determine if the volume should be deleted forcefully.
  * Volumes may have nested snapshot resources. Deleting such a volume will fail.
  * Setting this parameter to FORCE will delete volumes including nested snapshots.
  * Possible values: DEFAULT, FORCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}
  */
  readonly kerberosEnabled?: boolean | cdktf.IResolvable;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}
  */
  readonly largeCapacity?: boolean | cdktf.IResolvable;
  /**
  * Name of the pool location. Usually a region name, expect for some STANDARD service level pools which require a zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}
  */
  readonly location: string;
  /**
  * Optional. Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
  * Only the volume with largeCapacity will be allowed to have multiple endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}
  */
  readonly multipleEndpoints?: boolean | cdktf.IResolvable;
  /**
  * The name of the volume. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}
  */
  readonly project?: string;
  /**
  * The protocol of the volume. Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}
  */
  readonly protocols: string[];
  /**
  * List of actions that are restricted on this volume. Possible values: ["DELETE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}
  */
  readonly restrictedActions?: string[];
  /**
  * Security Style of the Volume. Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
  * Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}
  */
  readonly shareName: string;
  /**
  * Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}
  */
  readonly smbSettings?: string[];
  /**
  * If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}
  */
  readonly snapshotDirectory?: boolean | cdktf.IResolvable;
  /**
  * Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}
  */
  readonly storagePool: string;
  /**
  * Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}
  */
  readonly unixPermissions?: string;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}
  */
  readonly backupConfig?: GoogleNetappVolumeBackupConfig;
  /**
  * export_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}
  */
  readonly exportPolicy?: GoogleNetappVolumeExportPolicy;
  /**
  * restore_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}
  */
  readonly restoreParameters?: GoogleNetappVolumeRestoreParameters;
  /**
  * snapshot_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}
  */
  readonly snapshotPolicy?: GoogleNetappVolumeSnapshotPolicy;
  /**
  * tiering_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}
  */
  readonly tieringPolicy?: GoogleNetappVolumeTieringPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}
  */
  readonly timeouts?: GoogleNetappVolumeTimeouts;
}
export interface GoogleNetappVolumeMountOptions {
}

export function googleNetappVolumeMountOptionsToTerraform(struct?: GoogleNetappVolumeMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleNetappVolumeMountOptionsToHclTerraform(struct?: GoogleNetappVolumeMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleNetappVolumeMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleNetappVolumeMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeMountOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export - computed: true, optional: false, required: false
  public get export() {
    return this.getStringAttribute('export');
  }

  // export_full - computed: true, optional: false, required: false
  public get exportFull() {
    return this.getStringAttribute('export_full');
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class GoogleNetappVolumeMountOptionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleNetappVolumeMountOptionsOutputReference {
    return new GoogleNetappVolumeMountOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetappVolumeBackupConfig {
  /**
  * Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}
  */
  readonly backupPolicies?: string[];
  /**
  * ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups.
  * Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}
  */
  readonly backupVault?: string;
  /**
  * When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}
  */
  readonly scheduledBackupEnabled?: boolean | cdktf.IResolvable;
}

export function googleNetappVolumeBackupConfigToTerraform(struct?: GoogleNetappVolumeBackupConfigOutputReference | GoogleNetappVolumeBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupPolicies),
    backup_vault: cdktf.stringToTerraform(struct!.backupVault),
    scheduled_backup_enabled: cdktf.booleanToTerraform(struct!.scheduledBackupEnabled),
  }
}


export function googleNetappVolumeBackupConfigToHclTerraform(struct?: GoogleNetappVolumeBackupConfigOutputReference | GoogleNetappVolumeBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupPolicies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backup_vault: {
      value: cdktf.stringToHclTerraform(struct!.backupVault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scheduledBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicies = this._backupPolicies;
    }
    if (this._backupVault !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupVault = this._backupVault;
    }
    if (this._scheduledBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledBackupEnabled = this._scheduledBackupEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupPolicies = undefined;
      this._backupVault = undefined;
      this._scheduledBackupEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupPolicies = value.backupPolicies;
      this._backupVault = value.backupVault;
      this._scheduledBackupEnabled = value.scheduledBackupEnabled;
    }
  }

  // backup_policies - computed: false, optional: true, required: false
  private _backupPolicies?: string[]; 
  public get backupPolicies() {
    return this.getListAttribute('backup_policies');
  }
  public set backupPolicies(value: string[]) {
    this._backupPolicies = value;
  }
  public resetBackupPolicies() {
    this._backupPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPoliciesInput() {
    return this._backupPolicies;
  }

  // backup_vault - computed: false, optional: true, required: false
  private _backupVault?: string; 
  public get backupVault() {
    return this.getStringAttribute('backup_vault');
  }
  public set backupVault(value: string) {
    this._backupVault = value;
  }
  public resetBackupVault() {
    this._backupVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultInput() {
    return this._backupVault;
  }

  // scheduled_backup_enabled - computed: false, optional: true, required: false
  private _scheduledBackupEnabled?: boolean | cdktf.IResolvable; 
  public get scheduledBackupEnabled() {
    return this.getBooleanAttribute('scheduled_backup_enabled');
  }
  public set scheduledBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._scheduledBackupEnabled = value;
  }
  public resetScheduledBackupEnabled() {
    this._scheduledBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupEnabledInput() {
    return this._scheduledBackupEnabled;
  }
}
export interface GoogleNetappVolumeExportPolicyRules {
  /**
  * Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#access_type GoogleNetappVolume#access_type}
  */
  readonly accessType?: string;
  /**
  * Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#allowed_clients GoogleNetappVolume#allowed_clients}
  */
  readonly allowedClients?: string;
  /**
  * If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). This is also known as no_root_squash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#has_root_access GoogleNetappVolume#has_root_access}
  */
  readonly hasRootAccess?: string;
  /**
  * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5_read_only GoogleNetappVolume#kerberos5_read_only}
  */
  readonly kerberos5ReadOnly?: boolean | cdktf.IResolvable;
  /**
  * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5_read_write GoogleNetappVolume#kerberos5_read_write}
  */
  readonly kerberos5ReadWrite?: boolean | cdktf.IResolvable;
  /**
  * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5i_read_only GoogleNetappVolume#kerberos5i_read_only}
  */
  readonly kerberos5IReadOnly?: boolean | cdktf.IResolvable;
  /**
  * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5i_read_write GoogleNetappVolume#kerberos5i_read_write}
  */
  readonly kerberos5IReadWrite?: boolean | cdktf.IResolvable;
  /**
  * If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5p_read_only GoogleNetappVolume#kerberos5p_read_only}
  */
  readonly kerberos5PReadOnly?: boolean | cdktf.IResolvable;
  /**
  * If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#kerberos5p_read_write GoogleNetappVolume#kerberos5p_read_write}
  */
  readonly kerberos5PReadWrite?: boolean | cdktf.IResolvable;
  /**
  * Enable to apply the export rule to NFSV3 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#nfsv3 GoogleNetappVolume#nfsv3}
  */
  readonly nfsv3?: boolean | cdktf.IResolvable;
  /**
  * Enable to apply the export rule to NFSV4.1 clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#nfsv4 GoogleNetappVolume#nfsv4}
  */
  readonly nfsv4?: boolean | cdktf.IResolvable;
}

export function googleNetappVolumeExportPolicyRulesToTerraform(struct?: GoogleNetappVolumeExportPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    allowed_clients: cdktf.stringToTerraform(struct!.allowedClients),
    has_root_access: cdktf.stringToTerraform(struct!.hasRootAccess),
    kerberos5_read_only: cdktf.booleanToTerraform(struct!.kerberos5ReadOnly),
    kerberos5_read_write: cdktf.booleanToTerraform(struct!.kerberos5ReadWrite),
    kerberos5i_read_only: cdktf.booleanToTerraform(struct!.kerberos5IReadOnly),
    kerberos5i_read_write: cdktf.booleanToTerraform(struct!.kerberos5IReadWrite),
    kerberos5p_read_only: cdktf.booleanToTerraform(struct!.kerberos5PReadOnly),
    kerberos5p_read_write: cdktf.booleanToTerraform(struct!.kerberos5PReadWrite),
    nfsv3: cdktf.booleanToTerraform(struct!.nfsv3),
    nfsv4: cdktf.booleanToTerraform(struct!.nfsv4),
  }
}


export function googleNetappVolumeExportPolicyRulesToHclTerraform(struct?: GoogleNetappVolumeExportPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_clients: {
      value: cdktf.stringToHclTerraform(struct!.allowedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_root_access: {
      value: cdktf.stringToHclTerraform(struct!.hasRootAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos5_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5ReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5ReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5i_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5IReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5i_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5IReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5p_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5PReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kerberos5p_read_write: {
      value: cdktf.booleanToHclTerraform(struct!.kerberos5PReadWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv3: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nfsv4: {
      value: cdktf.booleanToHclTerraform(struct!.nfsv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeExportPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetappVolumeExportPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._hasRootAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasRootAccess = this._hasRootAccess;
    }
    if (this._kerberos5ReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5ReadOnly = this._kerberos5ReadOnly;
    }
    if (this._kerberos5ReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5ReadWrite = this._kerberos5ReadWrite;
    }
    if (this._kerberos5IReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5IReadOnly = this._kerberos5IReadOnly;
    }
    if (this._kerberos5IReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5IReadWrite = this._kerberos5IReadWrite;
    }
    if (this._kerberos5PReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5PReadOnly = this._kerberos5PReadOnly;
    }
    if (this._kerberos5PReadWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos5PReadWrite = this._kerberos5PReadWrite;
    }
    if (this._nfsv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv3 = this._nfsv3;
    }
    if (this._nfsv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsv4 = this._nfsv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeExportPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._allowedClients = undefined;
      this._hasRootAccess = undefined;
      this._kerberos5ReadOnly = undefined;
      this._kerberos5ReadWrite = undefined;
      this._kerberos5IReadOnly = undefined;
      this._kerberos5IReadWrite = undefined;
      this._kerberos5PReadOnly = undefined;
      this._kerberos5PReadWrite = undefined;
      this._nfsv3 = undefined;
      this._nfsv4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._allowedClients = value.allowedClients;
      this._hasRootAccess = value.hasRootAccess;
      this._kerberos5ReadOnly = value.kerberos5ReadOnly;
      this._kerberos5ReadWrite = value.kerberos5ReadWrite;
      this._kerberos5IReadOnly = value.kerberos5IReadOnly;
      this._kerberos5IReadWrite = value.kerberos5IReadWrite;
      this._kerberos5PReadOnly = value.kerberos5PReadOnly;
      this._kerberos5PReadWrite = value.kerberos5PReadWrite;
      this._nfsv3 = value.nfsv3;
      this._nfsv4 = value.nfsv4;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string; 
  public get allowedClients() {
    return this.getStringAttribute('allowed_clients');
  }
  public set allowedClients(value: string) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // has_root_access - computed: false, optional: true, required: false
  private _hasRootAccess?: string; 
  public get hasRootAccess() {
    return this.getStringAttribute('has_root_access');
  }
  public set hasRootAccess(value: string) {
    this._hasRootAccess = value;
  }
  public resetHasRootAccess() {
    this._hasRootAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRootAccessInput() {
    return this._hasRootAccess;
  }

  // kerberos5_read_only - computed: false, optional: true, required: false
  private _kerberos5ReadOnly?: boolean | cdktf.IResolvable; 
  public get kerberos5ReadOnly() {
    return this.getBooleanAttribute('kerberos5_read_only');
  }
  public set kerberos5ReadOnly(value: boolean | cdktf.IResolvable) {
    this._kerberos5ReadOnly = value;
  }
  public resetKerberos5ReadOnly() {
    this._kerberos5ReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5ReadOnlyInput() {
    return this._kerberos5ReadOnly;
  }

  // kerberos5_read_write - computed: false, optional: true, required: false
  private _kerberos5ReadWrite?: boolean | cdktf.IResolvable; 
  public get kerberos5ReadWrite() {
    return this.getBooleanAttribute('kerberos5_read_write');
  }
  public set kerberos5ReadWrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5ReadWrite = value;
  }
  public resetKerberos5ReadWrite() {
    this._kerberos5ReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5ReadWriteInput() {
    return this._kerberos5ReadWrite;
  }

  // kerberos5i_read_only - computed: false, optional: true, required: false
  private _kerberos5IReadOnly?: boolean | cdktf.IResolvable; 
  public get kerberos5IReadOnly() {
    return this.getBooleanAttribute('kerberos5i_read_only');
  }
  public set kerberos5IReadOnly(value: boolean | cdktf.IResolvable) {
    this._kerberos5IReadOnly = value;
  }
  public resetKerberos5IReadOnly() {
    this._kerberos5IReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5IReadOnlyInput() {
    return this._kerberos5IReadOnly;
  }

  // kerberos5i_read_write - computed: false, optional: true, required: false
  private _kerberos5IReadWrite?: boolean | cdktf.IResolvable; 
  public get kerberos5IReadWrite() {
    return this.getBooleanAttribute('kerberos5i_read_write');
  }
  public set kerberos5IReadWrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5IReadWrite = value;
  }
  public resetKerberos5IReadWrite() {
    this._kerberos5IReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5IReadWriteInput() {
    return this._kerberos5IReadWrite;
  }

  // kerberos5p_read_only - computed: false, optional: true, required: false
  private _kerberos5PReadOnly?: boolean | cdktf.IResolvable; 
  public get kerberos5PReadOnly() {
    return this.getBooleanAttribute('kerberos5p_read_only');
  }
  public set kerberos5PReadOnly(value: boolean | cdktf.IResolvable) {
    this._kerberos5PReadOnly = value;
  }
  public resetKerberos5PReadOnly() {
    this._kerberos5PReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5PReadOnlyInput() {
    return this._kerberos5PReadOnly;
  }

  // kerberos5p_read_write - computed: false, optional: true, required: false
  private _kerberos5PReadWrite?: boolean | cdktf.IResolvable; 
  public get kerberos5PReadWrite() {
    return this.getBooleanAttribute('kerberos5p_read_write');
  }
  public set kerberos5PReadWrite(value: boolean | cdktf.IResolvable) {
    this._kerberos5PReadWrite = value;
  }
  public resetKerberos5PReadWrite() {
    this._kerberos5PReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberos5PReadWriteInput() {
    return this._kerberos5PReadWrite;
  }

  // nfsv3 - computed: false, optional: true, required: false
  private _nfsv3?: boolean | cdktf.IResolvable; 
  public get nfsv3() {
    return this.getBooleanAttribute('nfsv3');
  }
  public set nfsv3(value: boolean | cdktf.IResolvable) {
    this._nfsv3 = value;
  }
  public resetNfsv3() {
    this._nfsv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv3Input() {
    return this._nfsv3;
  }

  // nfsv4 - computed: false, optional: true, required: false
  private _nfsv4?: boolean | cdktf.IResolvable; 
  public get nfsv4() {
    return this.getBooleanAttribute('nfsv4');
  }
  public set nfsv4(value: boolean | cdktf.IResolvable) {
    this._nfsv4 = value;
  }
  public resetNfsv4() {
    this._nfsv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsv4Input() {
    return this._nfsv4;
  }
}

export class GoogleNetappVolumeExportPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleNetappVolumeExportPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetappVolumeExportPolicyRulesOutputReference {
    return new GoogleNetappVolumeExportPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetappVolumeExportPolicy {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}
  */
  readonly rules: GoogleNetappVolumeExportPolicyRules[] | cdktf.IResolvable;
}

export function googleNetappVolumeExportPolicyToTerraform(struct?: GoogleNetappVolumeExportPolicyOutputReference | GoogleNetappVolumeExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(googleNetappVolumeExportPolicyRulesToTerraform, true)(struct!.rules),
  }
}


export function googleNetappVolumeExportPolicyToHclTerraform(struct?: GoogleNetappVolumeExportPolicyOutputReference | GoogleNetappVolumeExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(googleNetappVolumeExportPolicyRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetappVolumeExportPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeExportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeExportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleNetappVolumeExportPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleNetappVolumeExportPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface GoogleNetappVolumeRestoreParameters {
  /**
  * Full name of the snapshot to use for creating this volume.
  * 'source_snapshot' and 'source_backup' cannot be used simultaneously.
  * Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}
  */
  readonly sourceBackup?: string;
  /**
  * Full name of the snapshot to use for creating this volume.
  * 'source_snapshot' and 'source_backup' cannot be used simultaneously.
  * Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}
  */
  readonly sourceSnapshot?: string;
}

export function googleNetappVolumeRestoreParametersToTerraform(struct?: GoogleNetappVolumeRestoreParametersOutputReference | GoogleNetappVolumeRestoreParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_backup: cdktf.stringToTerraform(struct!.sourceBackup),
    source_snapshot: cdktf.stringToTerraform(struct!.sourceSnapshot),
  }
}


export function googleNetappVolumeRestoreParametersToHclTerraform(struct?: GoogleNetappVolumeRestoreParametersOutputReference | GoogleNetappVolumeRestoreParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_backup: {
      value: cdktf.stringToHclTerraform(struct!.sourceBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.sourceSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeRestoreParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeRestoreParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBackup = this._sourceBackup;
    }
    if (this._sourceSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshot = this._sourceSnapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeRestoreParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceBackup = undefined;
      this._sourceSnapshot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceBackup = value.sourceBackup;
      this._sourceSnapshot = value.sourceSnapshot;
    }
  }

  // source_backup - computed: false, optional: true, required: false
  private _sourceBackup?: string; 
  public get sourceBackup() {
    return this.getStringAttribute('source_backup');
  }
  public set sourceBackup(value: string) {
    this._sourceBackup = value;
  }
  public resetSourceBackup() {
    this._sourceBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBackupInput() {
    return this._sourceBackup;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
  }
}
export interface GoogleNetappVolumeSnapshotPolicyDailySchedule {
  /**
  * Set the hour to create the snapshot (0-23), defaults to midnight (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}
  */
  readonly hour?: number;
  /**
  * Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}
  */
  readonly minute?: number;
  /**
  * The maximum number of snapshots to keep for the daily schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep: number;
}

export function googleNetappVolumeSnapshotPolicyDailyScheduleToTerraform(struct?: GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function googleNetappVolumeSnapshotPolicyDailyScheduleToHclTerraform(struct?: GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeSnapshotPolicyDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeSnapshotPolicyDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: false, required: true
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}
export interface GoogleNetappVolumeSnapshotPolicyHourlySchedule {
  /**
  * Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}
  */
  readonly minute?: number;
  /**
  * The maximum number of snapshots to keep for the hourly schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep: number;
}

export function googleNetappVolumeSnapshotPolicyHourlyScheduleToTerraform(struct?: GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyHourlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function googleNetappVolumeSnapshotPolicyHourlyScheduleToHclTerraform(struct?: GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyHourlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeSnapshotPolicyHourlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeSnapshotPolicyHourlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: false, required: true
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}
export interface GoogleNetappVolumeSnapshotPolicyMonthlySchedule {
  /**
  * Set the day or days of the month to make a snapshot (1-31). Accepts a comma separated number of days. Defaults to '1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}
  */
  readonly daysOfMonth?: string;
  /**
  * Set the hour to create the snapshot (0-23), defaults to midnight (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}
  */
  readonly hour?: number;
  /**
  * Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}
  */
  readonly minute?: number;
  /**
  * The maximum number of snapshots to keep for the monthly schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep: number;
}

export function googleNetappVolumeSnapshotPolicyMonthlyScheduleToTerraform(struct?: GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.stringToTerraform(struct!.daysOfMonth),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function googleNetappVolumeSnapshotPolicyMonthlyScheduleToHclTerraform(struct?: GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyMonthlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.stringToHclTerraform(struct!.daysOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeSnapshotPolicyMonthlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeSnapshotPolicyMonthlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfMonth = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfMonth = value.daysOfMonth;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: string; 
  public get daysOfMonth() {
    return this.getStringAttribute('days_of_month');
  }
  public set daysOfMonth(value: string) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: false, required: true
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}
export interface GoogleNetappVolumeSnapshotPolicyWeeklySchedule {
  /**
  * Set the day or days of the week to make a snapshot. Accepts a comma separated days of the week. Defaults to 'Sunday'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}
  */
  readonly day?: string;
  /**
  * Set the hour to create the snapshot (0-23), defaults to midnight (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}
  */
  readonly hour?: number;
  /**
  * Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}
  */
  readonly minute?: number;
  /**
  * The maximum number of snapshots to keep for the weekly schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}
  */
  readonly snapshotsToKeep: number;
}

export function googleNetappVolumeSnapshotPolicyWeeklyScheduleToTerraform(struct?: GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    snapshots_to_keep: cdktf.numberToTerraform(struct!.snapshotsToKeep),
  }
}


export function googleNetappVolumeSnapshotPolicyWeeklyScheduleToHclTerraform(struct?: GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference | GoogleNetappVolumeSnapshotPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.snapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeSnapshotPolicyWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._snapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotsToKeep = this._snapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeSnapshotPolicyWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._snapshotsToKeep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._minute = value.minute;
      this._snapshotsToKeep = value.snapshotsToKeep;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: false, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // snapshots_to_keep - computed: false, optional: false, required: true
  private _snapshotsToKeep?: number; 
  public get snapshotsToKeep() {
    return this.getNumberAttribute('snapshots_to_keep');
  }
  public set snapshotsToKeep(value: number) {
    this._snapshotsToKeep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsToKeepInput() {
    return this._snapshotsToKeep;
  }
}
export interface GoogleNetappVolumeSnapshotPolicy {
  /**
  * Enables automated snapshot creation according to defined schedule. Default is false.
  * To disable automatic snapshot creation you have to remove the whole snapshot_policy block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}
  */
  readonly dailySchedule?: GoogleNetappVolumeSnapshotPolicyDailySchedule;
  /**
  * hourly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}
  */
  readonly hourlySchedule?: GoogleNetappVolumeSnapshotPolicyHourlySchedule;
  /**
  * monthly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}
  */
  readonly monthlySchedule?: GoogleNetappVolumeSnapshotPolicyMonthlySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}
  */
  readonly weeklySchedule?: GoogleNetappVolumeSnapshotPolicyWeeklySchedule;
}

export function googleNetappVolumeSnapshotPolicyToTerraform(struct?: GoogleNetappVolumeSnapshotPolicyOutputReference | GoogleNetappVolumeSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    daily_schedule: googleNetappVolumeSnapshotPolicyDailyScheduleToTerraform(struct!.dailySchedule),
    hourly_schedule: googleNetappVolumeSnapshotPolicyHourlyScheduleToTerraform(struct!.hourlySchedule),
    monthly_schedule: googleNetappVolumeSnapshotPolicyMonthlyScheduleToTerraform(struct!.monthlySchedule),
    weekly_schedule: googleNetappVolumeSnapshotPolicyWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function googleNetappVolumeSnapshotPolicyToHclTerraform(struct?: GoogleNetappVolumeSnapshotPolicyOutputReference | GoogleNetappVolumeSnapshotPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    daily_schedule: {
      value: googleNetappVolumeSnapshotPolicyDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetappVolumeSnapshotPolicyDailyScheduleList",
    },
    hourly_schedule: {
      value: googleNetappVolumeSnapshotPolicyHourlyScheduleToHclTerraform(struct!.hourlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetappVolumeSnapshotPolicyHourlyScheduleList",
    },
    monthly_schedule: {
      value: googleNetappVolumeSnapshotPolicyMonthlyScheduleToHclTerraform(struct!.monthlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetappVolumeSnapshotPolicyMonthlyScheduleList",
    },
    weekly_schedule: {
      value: googleNetappVolumeSnapshotPolicyWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetappVolumeSnapshotPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeSnapshotPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeSnapshotPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._hourlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourlySchedule = this._hourlySchedule?.internalValue;
    }
    if (this._monthlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlySchedule = this._monthlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeSnapshotPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._dailySchedule.internalValue = undefined;
      this._hourlySchedule.internalValue = undefined;
      this._monthlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._hourlySchedule.internalValue = value.hourlySchedule;
      this._monthlySchedule.internalValue = value.monthlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: GoogleNetappVolumeSnapshotPolicyDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // hourly_schedule - computed: false, optional: true, required: false
  private _hourlySchedule = new GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(this, "hourly_schedule");
  public get hourlySchedule() {
    return this._hourlySchedule;
  }
  public putHourlySchedule(value: GoogleNetappVolumeSnapshotPolicyHourlySchedule) {
    this._hourlySchedule.internalValue = value;
  }
  public resetHourlySchedule() {
    this._hourlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyScheduleInput() {
    return this._hourlySchedule.internalValue;
  }

  // monthly_schedule - computed: false, optional: true, required: false
  private _monthlySchedule = new GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(this, "monthly_schedule");
  public get monthlySchedule() {
    return this._monthlySchedule;
  }
  public putMonthlySchedule(value: GoogleNetappVolumeSnapshotPolicyMonthlySchedule) {
    this._monthlySchedule.internalValue = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: GoogleNetappVolumeSnapshotPolicyWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface GoogleNetappVolumeTieringPolicy {
  /**
  * Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 7-183.
  * Default is 31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}
  */
  readonly coolingThresholdDays?: number;
  /**
  * Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}
  */
  readonly tierAction?: string;
}

export function googleNetappVolumeTieringPolicyToTerraform(struct?: GoogleNetappVolumeTieringPolicyOutputReference | GoogleNetappVolumeTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooling_threshold_days: cdktf.numberToTerraform(struct!.coolingThresholdDays),
    tier_action: cdktf.stringToTerraform(struct!.tierAction),
  }
}


export function googleNetappVolumeTieringPolicyToHclTerraform(struct?: GoogleNetappVolumeTieringPolicyOutputReference | GoogleNetappVolumeTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooling_threshold_days: {
      value: cdktf.numberToHclTerraform(struct!.coolingThresholdDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tier_action: {
      value: cdktf.stringToHclTerraform(struct!.tierAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetappVolumeTieringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetappVolumeTieringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingThresholdDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingThresholdDays = this._coolingThresholdDays;
    }
    if (this._tierAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierAction = this._tierAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetappVolumeTieringPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolingThresholdDays = undefined;
      this._tierAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolingThresholdDays = value.coolingThresholdDays;
      this._tierAction = value.tierAction;
    }
  }

  // cooling_threshold_days - computed: false, optional: true, required: false
  private _coolingThresholdDays?: number; 
  public get coolingThresholdDays() {
    return this.getNumberAttribute('cooling_threshold_days');
  }
  public set coolingThresholdDays(value: number) {
    this._coolingThresholdDays = value;
  }
  public resetCoolingThresholdDays() {
    this._coolingThresholdDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingThresholdDaysInput() {
    return this._coolingThresholdDays;
  }

  // tier_action - computed: false, optional: true, required: false
  private _tierAction?: string; 
  public get tierAction() {
    return this.getStringAttribute('tier_action');
  }
  public set tierAction(value: string) {
    this._tierAction = value;
  }
  public resetTierAction() {
    this._tierAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierActionInput() {
    return this._tierAction;
  }
}
export interface GoogleNetappVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}
  */
  readonly update?: string;
}

export function googleNetappVolumeTimeoutsToTerraform(struct?: GoogleNetappVolumeTimeouts | cdktf.IResolvable): any {
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


export function googleNetappVolumeTimeoutsToHclTerraform(struct?: GoogleNetappVolumeTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetappVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetappVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetappVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume google_netapp_volume}
*/
export class GoogleNetappVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetappVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetappVolume to import
  * @param importFromId The id of the existing GoogleNetappVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetappVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_netapp_volume google_netapp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetappVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_volume',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.22.0',
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
    this._capacityGib = config.capacityGib;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._kerberosEnabled = config.kerberosEnabled;
    this._labels = config.labels;
    this._largeCapacity = config.largeCapacity;
    this._location = config.location;
    this._multipleEndpoints = config.multipleEndpoints;
    this._name = config.name;
    this._project = config.project;
    this._protocols = config.protocols;
    this._restrictedActions = config.restrictedActions;
    this._securityStyle = config.securityStyle;
    this._shareName = config.shareName;
    this._smbSettings = config.smbSettings;
    this._snapshotDirectory = config.snapshotDirectory;
    this._storagePool = config.storagePool;
    this._unixPermissions = config.unixPermissions;
    this._backupConfig.internalValue = config.backupConfig;
    this._exportPolicy.internalValue = config.exportPolicy;
    this._restoreParameters.internalValue = config.restoreParameters;
    this._snapshotPolicy.internalValue = config.snapshotPolicy;
    this._tieringPolicy.internalValue = config.tieringPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory - computed: true, optional: false, required: false
  public get activeDirectory() {
    return this.getStringAttribute('active_directory');
  }

  // capacity_gib - computed: false, optional: false, required: true
  private _capacityGib?: string; 
  public get capacityGib() {
    return this.getStringAttribute('capacity_gib');
  }
  public set capacityGib(value: string) {
    this._capacityGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGibInput() {
    return this._capacityGib;
  }

  // cold_tier_size_gib - computed: true, optional: false, required: false
  public get coldTierSizeGib() {
    return this.getStringAttribute('cold_tier_size_gib');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // has_replication - computed: true, optional: false, required: false
  public get hasReplication() {
    return this.getBooleanAttribute('has_replication');
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

  // kerberos_enabled - computed: false, optional: true, required: false
  private _kerberosEnabled?: boolean | cdktf.IResolvable; 
  public get kerberosEnabled() {
    return this.getBooleanAttribute('kerberos_enabled');
  }
  public set kerberosEnabled(value: boolean | cdktf.IResolvable) {
    this._kerberosEnabled = value;
  }
  public resetKerberosEnabled() {
    this._kerberosEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosEnabledInput() {
    return this._kerberosEnabled;
  }

  // kms_config - computed: true, optional: false, required: false
  public get kmsConfig() {
    return this.getStringAttribute('kms_config');
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

  // large_capacity - computed: false, optional: true, required: false
  private _largeCapacity?: boolean | cdktf.IResolvable; 
  public get largeCapacity() {
    return this.getBooleanAttribute('large_capacity');
  }
  public set largeCapacity(value: boolean | cdktf.IResolvable) {
    this._largeCapacity = value;
  }
  public resetLargeCapacity() {
    this._largeCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCapacityInput() {
    return this._largeCapacity;
  }

  // ldap_enabled - computed: true, optional: false, required: false
  public get ldapEnabled() {
    return this.getBooleanAttribute('ldap_enabled');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mount_options - computed: true, optional: false, required: false
  private _mountOptions = new GoogleNetappVolumeMountOptionsList(this, "mount_options", false);
  public get mountOptions() {
    return this._mountOptions;
  }

  // multiple_endpoints - computed: false, optional: true, required: false
  private _multipleEndpoints?: boolean | cdktf.IResolvable; 
  public get multipleEndpoints() {
    return this.getBooleanAttribute('multiple_endpoints');
  }
  public set multipleEndpoints(value: boolean | cdktf.IResolvable) {
    this._multipleEndpoints = value;
  }
  public resetMultipleEndpoints() {
    this._multipleEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleEndpointsInput() {
    return this._multipleEndpoints;
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // psa_range - computed: true, optional: false, required: false
  public get psaRange() {
    return this.getStringAttribute('psa_range');
  }

  // replica_zone - computed: true, optional: false, required: false
  public get replicaZone() {
    return this.getStringAttribute('replica_zone');
  }

  // restricted_actions - computed: false, optional: true, required: false
  private _restrictedActions?: string[]; 
  public get restrictedActions() {
    return this.getListAttribute('restricted_actions');
  }
  public set restrictedActions(value: string[]) {
    this._restrictedActions = value;
  }
  public resetRestrictedActions() {
    this._restrictedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedActionsInput() {
    return this._restrictedActions;
  }

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // smb_settings - computed: true, optional: true, required: false
  private _smbSettings?: string[]; 
  public get smbSettings() {
    return this.getListAttribute('smb_settings');
  }
  public set smbSettings(value: string[]) {
    this._smbSettings = value;
  }
  public resetSmbSettings() {
    this._smbSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbSettingsInput() {
    return this._smbSettings;
  }

  // snapshot_directory - computed: false, optional: true, required: false
  private _snapshotDirectory?: boolean | cdktf.IResolvable; 
  public get snapshotDirectory() {
    return this.getBooleanAttribute('snapshot_directory');
  }
  public set snapshotDirectory(value: boolean | cdktf.IResolvable) {
    this._snapshotDirectory = value;
  }
  public resetSnapshotDirectory() {
    this._snapshotDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDirectoryInput() {
    return this._snapshotDirectory;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // storage_pool - computed: false, optional: false, required: true
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
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

  // unix_permissions - computed: true, optional: true, required: false
  private _unixPermissions?: string; 
  public get unixPermissions() {
    return this.getStringAttribute('unix_permissions');
  }
  public set unixPermissions(value: string) {
    this._unixPermissions = value;
  }
  public resetUnixPermissions() {
    this._unixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixPermissionsInput() {
    return this._unixPermissions;
  }

  // used_gib - computed: true, optional: false, required: false
  public get usedGib() {
    return this.getStringAttribute('used_gib');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new GoogleNetappVolumeBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: GoogleNetappVolumeBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy = new GoogleNetappVolumeExportPolicyOutputReference(this, "export_policy");
  public get exportPolicy() {
    return this._exportPolicy;
  }
  public putExportPolicy(value: GoogleNetappVolumeExportPolicy) {
    this._exportPolicy.internalValue = value;
  }
  public resetExportPolicy() {
    this._exportPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy.internalValue;
  }

  // restore_parameters - computed: false, optional: true, required: false
  private _restoreParameters = new GoogleNetappVolumeRestoreParametersOutputReference(this, "restore_parameters");
  public get restoreParameters() {
    return this._restoreParameters;
  }
  public putRestoreParameters(value: GoogleNetappVolumeRestoreParameters) {
    this._restoreParameters.internalValue = value;
  }
  public resetRestoreParameters() {
    this._restoreParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreParametersInput() {
    return this._restoreParameters.internalValue;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy = new GoogleNetappVolumeSnapshotPolicyOutputReference(this, "snapshot_policy");
  public get snapshotPolicy() {
    return this._snapshotPolicy;
  }
  public putSnapshotPolicy(value: GoogleNetappVolumeSnapshotPolicy) {
    this._snapshotPolicy.internalValue = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy.internalValue;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy = new GoogleNetappVolumeTieringPolicyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }
  public putTieringPolicy(value: GoogleNetappVolumeTieringPolicy) {
    this._tieringPolicy.internalValue = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetappVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetappVolumeTimeouts) {
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
      capacity_gib: cdktf.stringToTerraform(this._capacityGib),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kerberos_enabled: cdktf.booleanToTerraform(this._kerberosEnabled),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      large_capacity: cdktf.booleanToTerraform(this._largeCapacity),
      location: cdktf.stringToTerraform(this._location),
      multiple_endpoints: cdktf.booleanToTerraform(this._multipleEndpoints),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      restricted_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedActions),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      share_name: cdktf.stringToTerraform(this._shareName),
      smb_settings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smbSettings),
      snapshot_directory: cdktf.booleanToTerraform(this._snapshotDirectory),
      storage_pool: cdktf.stringToTerraform(this._storagePool),
      unix_permissions: cdktf.stringToTerraform(this._unixPermissions),
      backup_config: googleNetappVolumeBackupConfigToTerraform(this._backupConfig.internalValue),
      export_policy: googleNetappVolumeExportPolicyToTerraform(this._exportPolicy.internalValue),
      restore_parameters: googleNetappVolumeRestoreParametersToTerraform(this._restoreParameters.internalValue),
      snapshot_policy: googleNetappVolumeSnapshotPolicyToTerraform(this._snapshotPolicy.internalValue),
      tiering_policy: googleNetappVolumeTieringPolicyToTerraform(this._tieringPolicy.internalValue),
      timeouts: googleNetappVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_gib: {
        value: cdktf.stringToHclTerraform(this._capacityGib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_enabled: {
        value: cdktf.booleanToHclTerraform(this._kerberosEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      large_capacity: {
        value: cdktf.booleanToHclTerraform(this._largeCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_endpoints: {
        value: cdktf.booleanToHclTerraform(this._multipleEndpoints),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      restricted_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedActions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      security_style: {
        value: cdktf.stringToHclTerraform(this._securityStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_name: {
        value: cdktf.stringToHclTerraform(this._shareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_settings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smbSettings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snapshot_directory: {
        value: cdktf.booleanToHclTerraform(this._snapshotDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_pool: {
        value: cdktf.stringToHclTerraform(this._storagePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unix_permissions: {
        value: cdktf.stringToHclTerraform(this._unixPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_config: {
        value: googleNetappVolumeBackupConfigToHclTerraform(this._backupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetappVolumeBackupConfigList",
      },
      export_policy: {
        value: googleNetappVolumeExportPolicyToHclTerraform(this._exportPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetappVolumeExportPolicyList",
      },
      restore_parameters: {
        value: googleNetappVolumeRestoreParametersToHclTerraform(this._restoreParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetappVolumeRestoreParametersList",
      },
      snapshot_policy: {
        value: googleNetappVolumeSnapshotPolicyToHclTerraform(this._snapshotPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetappVolumeSnapshotPolicyList",
      },
      tiering_policy: {
        value: googleNetappVolumeTieringPolicyToHclTerraform(this._tieringPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetappVolumeTieringPolicyList",
      },
      timeouts: {
        value: googleNetappVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetappVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
