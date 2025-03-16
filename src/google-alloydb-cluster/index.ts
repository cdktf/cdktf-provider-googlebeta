/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAlloydbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#annotations GoogleAlloydbCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The ID of the alloydb cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#cluster_id GoogleAlloydbCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#cluster_type GoogleAlloydbCluster#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * The database engine major version. This is an optional field and it's populated at the Cluster creation time.
  * Note: Changing this field to a higer version results in upgrading the AlloyDB cluster which is an irreversible change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#database_version GoogleAlloydbCluster#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Policy to determine if the cluster should be deleted forcefully.
  * Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster.
  * Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
  * Possible values: DEFAULT, FORCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#deletion_policy GoogleAlloydbCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-settable and human-readable display name for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#display_name GoogleAlloydbCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * For Resource freshness validation (https://google.aip.dev/154)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#etag GoogleAlloydbCluster#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the alloydb cluster.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the alloydb cluster should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}
  */
  readonly project?: string;
  /**
  * Set to true to skip awaiting on the major version upgrade of the cluster.
  * Possible values: true, false
  * Default value: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#skip_await_major_version_upgrade GoogleAlloydbCluster#skip_await_major_version_upgrade}
  */
  readonly skipAwaitMajorVersionUpgrade?: boolean | cdktf.IResolvable;
  /**
  * The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#subscription_type GoogleAlloydbCluster#subscription_type}
  */
  readonly subscriptionType?: string;
  /**
  * automated_backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#automated_backup_policy GoogleAlloydbCluster#automated_backup_policy}
  */
  readonly automatedBackupPolicy?: GoogleAlloydbClusterAutomatedBackupPolicy;
  /**
  * continuous_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#continuous_backup_config GoogleAlloydbCluster#continuous_backup_config}
  */
  readonly continuousBackupConfig?: GoogleAlloydbClusterContinuousBackupConfig;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleAlloydbClusterEncryptionConfig;
  /**
  * initial_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#initial_user GoogleAlloydbCluster#initial_user}
  */
  readonly initialUser?: GoogleAlloydbClusterInitialUser;
  /**
  * maintenance_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#maintenance_update_policy GoogleAlloydbCluster#maintenance_update_policy}
  */
  readonly maintenanceUpdatePolicy?: GoogleAlloydbClusterMaintenanceUpdatePolicy;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#network_config GoogleAlloydbCluster#network_config}
  */
  readonly networkConfig?: GoogleAlloydbClusterNetworkConfig;
  /**
  * psc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#psc_config GoogleAlloydbCluster#psc_config}
  */
  readonly pscConfig?: GoogleAlloydbClusterPscConfig;
  /**
  * restore_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#restore_backup_source GoogleAlloydbCluster#restore_backup_source}
  */
  readonly restoreBackupSource?: GoogleAlloydbClusterRestoreBackupSource;
  /**
  * restore_continuous_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#restore_continuous_backup_source GoogleAlloydbCluster#restore_continuous_backup_source}
  */
  readonly restoreContinuousBackupSource?: GoogleAlloydbClusterRestoreContinuousBackupSource;
  /**
  * secondary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#secondary_config GoogleAlloydbCluster#secondary_config}
  */
  readonly secondaryConfig?: GoogleAlloydbClusterSecondaryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#timeouts GoogleAlloydbCluster#timeouts}
  */
  readonly timeouts?: GoogleAlloydbClusterTimeouts;
}
export interface GoogleAlloydbClusterBackupSource {
}

export function googleAlloydbClusterBackupSourceToTerraform(struct?: GoogleAlloydbClusterBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterBackupSourceToHclTerraform(struct?: GoogleAlloydbClusterBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterBackupSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_name - computed: true, optional: false, required: false
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
}

export class GoogleAlloydbClusterBackupSourceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterBackupSourceOutputReference {
    return new GoogleAlloydbClusterBackupSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo {
}

export function googleAlloydbClusterContinuousBackupInfoEncryptionInfoToTerraform(struct?: GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterContinuousBackupInfoEncryptionInfoToHclTerraform(struct?: GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference {
    return new GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterContinuousBackupInfo {
}

export function googleAlloydbClusterContinuousBackupInfoToTerraform(struct?: GoogleAlloydbClusterContinuousBackupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterContinuousBackupInfoToHclTerraform(struct?: GoogleAlloydbClusterContinuousBackupInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterContinuousBackupInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterContinuousBackupInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterContinuousBackupInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // earliest_restorable_time - computed: true, optional: false, required: false
  public get earliestRestorableTime() {
    return this.getStringAttribute('earliest_restorable_time');
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getListAttribute('schedule');
  }
}

export class GoogleAlloydbClusterContinuousBackupInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterContinuousBackupInfoOutputReference {
    return new GoogleAlloydbClusterContinuousBackupInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterEncryptionInfo {
}

export function googleAlloydbClusterEncryptionInfoToTerraform(struct?: GoogleAlloydbClusterEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterEncryptionInfoToHclTerraform(struct?: GoogleAlloydbClusterEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_versions - computed: true, optional: false, required: false
  public get kmsKeyVersions() {
    return this.getListAttribute('kms_key_versions');
  }
}

export class GoogleAlloydbClusterEncryptionInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterEncryptionInfoOutputReference {
    return new GoogleAlloydbClusterEncryptionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterMigrationSource {
}

export function googleAlloydbClusterMigrationSourceToTerraform(struct?: GoogleAlloydbClusterMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterMigrationSourceToHclTerraform(struct?: GoogleAlloydbClusterMigrationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterMigrationSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterMigrationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterMigrationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class GoogleAlloydbClusterMigrationSourceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterMigrationSourceOutputReference {
    return new GoogleAlloydbClusterMigrationSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterTrialMetadata {
}

export function googleAlloydbClusterTrialMetadataToTerraform(struct?: GoogleAlloydbClusterTrialMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAlloydbClusterTrialMetadataToHclTerraform(struct?: GoogleAlloydbClusterTrialMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAlloydbClusterTrialMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterTrialMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterTrialMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // grace_end_time - computed: true, optional: false, required: false
  public get graceEndTime() {
    return this.getStringAttribute('grace_end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
}

export class GoogleAlloydbClusterTrialMetadataList extends cdktf.ComplexList {

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
  public get(index: number): GoogleAlloydbClusterTrialMetadataOutputReference {
    return new GoogleAlloydbClusterTrialMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function googleAlloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyEncryptionConfigToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention {
  /**
  * The number of backups to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#count GoogleAlloydbCluster#count}
  */
  readonly count?: number;
}

export function googleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention {
  /**
  * The retention period.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#retention_period GoogleAlloydbCluster#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function googleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}
  */
  readonly seconds?: number;
}

export function googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

export class GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList extends cdktf.ComplexList {
  public internalValue? : GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable

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
  public get(index: number): GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference {
    return new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule {
  /**
  * The days of the week to perform a backup. At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#days_of_week GoogleAlloydbCluster#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * start_times block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#start_times GoogleAlloydbCluster#start_times}
  */
  readonly startTimes: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable;
}

export function googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    start_times: cdktf.listMapper(googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToTerraform, true)(struct!.startTimes),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference | GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_times: {
      value: cdktf.listMapperHcl(googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesToHclTerraform, true)(struct!.startTimes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._startTimes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimes = this._startTimes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._startTimes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._startTimes.internalValue = value.startTimes;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // start_times - computed: false, optional: false, required: true
  private _startTimes = new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(this, "start_times", false);
  public get startTimes() {
    return this._startTimes;
  }
  public putStartTimes(value: GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes[] | cdktf.IResolvable) {
    this._startTimes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimesInput() {
    return this._startTimes.internalValue;
  }
}
export interface GoogleAlloydbClusterAutomatedBackupPolicy {
  /**
  * The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.
  * 
  * The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.
  * 
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#backup_window GoogleAlloydbCluster#backup_window}
  */
  readonly backupWindow?: string;
  /**
  * Whether automated backups are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to backups created using this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}
  */
  readonly location?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig;
  /**
  * quantity_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#quantity_based_retention GoogleAlloydbCluster#quantity_based_retention}
  */
  readonly quantityBasedRetention?: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention;
  /**
  * time_based_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#time_based_retention GoogleAlloydbCluster#time_based_retention}
  */
  readonly timeBasedRetention?: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#weekly_schedule GoogleAlloydbCluster#weekly_schedule}
  */
  readonly weeklySchedule?: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule;
}

export function googleAlloydbClusterAutomatedBackupPolicyToTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyOutputReference | GoogleAlloydbClusterAutomatedBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_window: cdktf.stringToTerraform(struct!.backupWindow),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    location: cdktf.stringToTerraform(struct!.location),
    encryption_config: googleAlloydbClusterAutomatedBackupPolicyEncryptionConfigToTerraform(struct!.encryptionConfig),
    quantity_based_retention: googleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToTerraform(struct!.quantityBasedRetention),
    time_based_retention: googleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionToTerraform(struct!.timeBasedRetention),
    weekly_schedule: googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function googleAlloydbClusterAutomatedBackupPolicyToHclTerraform(struct?: GoogleAlloydbClusterAutomatedBackupPolicyOutputReference | GoogleAlloydbClusterAutomatedBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_window: {
      value: cdktf.stringToHclTerraform(struct!.backupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_config: {
      value: googleAlloydbClusterAutomatedBackupPolicyEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigList",
    },
    quantity_based_retention: {
      value: googleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionToHclTerraform(struct!.quantityBasedRetention),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionList",
    },
    time_based_retention: {
      value: googleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionToHclTerraform(struct!.timeBasedRetention),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionList",
    },
    weekly_schedule: {
      value: googleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterAutomatedBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterAutomatedBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindow = this._backupWindow;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._quantityBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityBasedRetention = this._quantityBasedRetention?.internalValue;
    }
    if (this._timeBasedRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedRetention = this._timeBasedRetention?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterAutomatedBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupWindow = undefined;
      this._enabled = undefined;
      this._labels = undefined;
      this._location = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._quantityBasedRetention.internalValue = undefined;
      this._timeBasedRetention.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupWindow = value.backupWindow;
      this._enabled = value.enabled;
      this._labels = value.labels;
      this._location = value.location;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._quantityBasedRetention.internalValue = value.quantityBasedRetention;
      this._timeBasedRetention.internalValue = value.timeBasedRetention;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // backup_window - computed: true, optional: true, required: false
  private _backupWindow?: string; 
  public get backupWindow() {
    return this.getStringAttribute('backup_window');
  }
  public set backupWindow(value: string) {
    this._backupWindow = value;
  }
  public resetBackupWindow() {
    this._backupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow;
  }

  // enabled - computed: true, optional: true, required: false
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // quantity_based_retention - computed: false, optional: true, required: false
  private _quantityBasedRetention = new GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(this, "quantity_based_retention");
  public get quantityBasedRetention() {
    return this._quantityBasedRetention;
  }
  public putQuantityBasedRetention(value: GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention) {
    this._quantityBasedRetention.internalValue = value;
  }
  public resetQuantityBasedRetention() {
    this._quantityBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityBasedRetentionInput() {
    return this._quantityBasedRetention.internalValue;
  }

  // time_based_retention - computed: false, optional: true, required: false
  private _timeBasedRetention = new GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(this, "time_based_retention");
  public get timeBasedRetention() {
    return this._timeBasedRetention;
  }
  public putTimeBasedRetention(value: GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention) {
    this._timeBasedRetention.internalValue = value;
  }
  public resetTimeBasedRetention() {
    this._timeBasedRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedRetentionInput() {
    return this._timeBasedRetention.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule) {
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
export interface GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function googleAlloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct?: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference | GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleAlloydbClusterContinuousBackupConfigEncryptionConfigToHclTerraform(struct?: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference | GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleAlloydbClusterContinuousBackupConfig {
  /**
  * Whether continuous backup recovery is enabled. If not set, defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The numbers of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window.
  * 
  * If not set, defaults to 14 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#recovery_window_days GoogleAlloydbCluster#recovery_window_days}
  */
  readonly recoveryWindowDays?: number;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig;
}

export function googleAlloydbClusterContinuousBackupConfigToTerraform(struct?: GoogleAlloydbClusterContinuousBackupConfigOutputReference | GoogleAlloydbClusterContinuousBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    recovery_window_days: cdktf.numberToTerraform(struct!.recoveryWindowDays),
    encryption_config: googleAlloydbClusterContinuousBackupConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
  }
}


export function googleAlloydbClusterContinuousBackupConfigToHclTerraform(struct?: GoogleAlloydbClusterContinuousBackupConfigOutputReference | GoogleAlloydbClusterContinuousBackupConfig): any {
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
    recovery_window_days: {
      value: cdktf.numberToHclTerraform(struct!.recoveryWindowDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_config: {
      value: googleAlloydbClusterContinuousBackupConfigEncryptionConfigToHclTerraform(struct!.encryptionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterContinuousBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterContinuousBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._recoveryWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindowDays = this._recoveryWindowDays;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterContinuousBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._recoveryWindowDays = undefined;
      this._encryptionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._recoveryWindowDays = value.recoveryWindowDays;
      this._encryptionConfig.internalValue = value.encryptionConfig;
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

  // recovery_window_days - computed: true, optional: true, required: false
  private _recoveryWindowDays?: number; 
  public get recoveryWindowDays() {
    return this.getNumberAttribute('recovery_window_days');
  }
  public set recoveryWindowDays(value: number) {
    this._recoveryWindowDays = value;
  }
  public resetRecoveryWindowDays() {
    this._recoveryWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowDaysInput() {
    return this._recoveryWindowDays;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }
}
export interface GoogleAlloydbClusterEncryptionConfig {
  /**
  * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function googleAlloydbClusterEncryptionConfigToTerraform(struct?: GoogleAlloydbClusterEncryptionConfigOutputReference | GoogleAlloydbClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleAlloydbClusterEncryptionConfigToHclTerraform(struct?: GoogleAlloydbClusterEncryptionConfigOutputReference | GoogleAlloydbClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleAlloydbClusterInitialUser {
  /**
  * The initial password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#password GoogleAlloydbCluster#password}
  */
  readonly password: string;
  /**
  * The database username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#user GoogleAlloydbCluster#user}
  */
  readonly user?: string;
}

export function googleAlloydbClusterInitialUserToTerraform(struct?: GoogleAlloydbClusterInitialUserOutputReference | GoogleAlloydbClusterInitialUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function googleAlloydbClusterInitialUserToHclTerraform(struct?: GoogleAlloydbClusterInitialUserOutputReference | GoogleAlloydbClusterInitialUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterInitialUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterInitialUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterInitialUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}
  */
  readonly hours: number;
  /**
  * Minutes of hour of day. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Currently, only the value 0 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}
  */
  readonly seconds?: number;
}

export function googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToHclTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference | GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows {
  /**
  * Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#day GoogleAlloydbCluster#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#start_time GoogleAlloydbCluster#start_time}
  */
  readonly startTime: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime;
}

export function googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToTerraform(struct!.startTime),
  }
}


export function googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToHclTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktf.IResolvable): any {
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
    start_time: {
      value: googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList extends cdktf.ComplexList {
  public internalValue? : GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktf.IResolvable

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
  public get(index: number): GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference {
    return new GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbClusterMaintenanceUpdatePolicy {
  /**
  * maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#maintenance_windows GoogleAlloydbCluster#maintenance_windows}
  */
  readonly maintenanceWindows?: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktf.IResolvable;
}

export function googleAlloydbClusterMaintenanceUpdatePolicyToTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference | GoogleAlloydbClusterMaintenanceUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_windows: cdktf.listMapper(googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToTerraform, true)(struct!.maintenanceWindows),
  }
}


export function googleAlloydbClusterMaintenanceUpdatePolicyToHclTerraform(struct?: GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference | GoogleAlloydbClusterMaintenanceUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_windows: {
      value: cdktf.listMapperHcl(googleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsToHclTerraform, true)(struct!.maintenanceWindows),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterMaintenanceUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindows = this._maintenanceWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterMaintenanceUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindows.internalValue = value.maintenanceWindows;
    }
  }

  // maintenance_windows - computed: false, optional: true, required: false
  private _maintenanceWindows = new GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList(this, "maintenance_windows", false);
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }
  public putMaintenanceWindows(value: GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows[] | cdktf.IResolvable) {
    this._maintenanceWindows.internalValue = value;
  }
  public resetMaintenanceWindows() {
    this._maintenanceWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowsInput() {
    return this._maintenanceWindows.internalValue;
  }
}
export interface GoogleAlloydbClusterNetworkConfig {
  /**
  * The name of the allocated IP range for the private IP AlloyDB cluster. For example: "google-managed-services-default".
  * If set, the instance IPs for this cluster will be created in the allocated range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#allocated_ip_range GoogleAlloydbCluster#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
  * It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#network GoogleAlloydbCluster#network}
  */
  readonly network?: string;
}

export function googleAlloydbClusterNetworkConfigToTerraform(struct?: GoogleAlloydbClusterNetworkConfigOutputReference | GoogleAlloydbClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function googleAlloydbClusterNetworkConfigToHclTerraform(struct?: GoogleAlloydbClusterNetworkConfigOutputReference | GoogleAlloydbClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range: {
      value: cdktf.stringToHclTerraform(struct!.allocatedIpRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._network = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._network = value.network;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}
export interface GoogleAlloydbClusterPscConfig {
  /**
  * Create an instance that allows connections from Private Service Connect endpoints to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#psc_enabled GoogleAlloydbCluster#psc_enabled}
  */
  readonly pscEnabled?: boolean | cdktf.IResolvable;
}

export function googleAlloydbClusterPscConfigToTerraform(struct?: GoogleAlloydbClusterPscConfigOutputReference | GoogleAlloydbClusterPscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psc_enabled: cdktf.booleanToTerraform(struct!.pscEnabled),
  }
}


export function googleAlloydbClusterPscConfigToHclTerraform(struct?: GoogleAlloydbClusterPscConfigOutputReference | GoogleAlloydbClusterPscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psc_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pscEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterPscConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterPscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pscEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscEnabled = this._pscEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterPscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pscEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pscEnabled = value.pscEnabled;
    }
  }

  // psc_enabled - computed: false, optional: true, required: false
  private _pscEnabled?: boolean | cdktf.IResolvable; 
  public get pscEnabled() {
    return this.getBooleanAttribute('psc_enabled');
  }
  public set pscEnabled(value: boolean | cdktf.IResolvable) {
    this._pscEnabled = value;
  }
  public resetPscEnabled() {
    this._pscEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscEnabledInput() {
    return this._pscEnabled;
  }
}
export interface GoogleAlloydbClusterRestoreBackupSource {
  /**
  * The name of the backup that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#backup_name GoogleAlloydbCluster#backup_name}
  */
  readonly backupName: string;
}

export function googleAlloydbClusterRestoreBackupSourceToTerraform(struct?: GoogleAlloydbClusterRestoreBackupSourceOutputReference | GoogleAlloydbClusterRestoreBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_name: cdktf.stringToTerraform(struct!.backupName),
  }
}


export function googleAlloydbClusterRestoreBackupSourceToHclTerraform(struct?: GoogleAlloydbClusterRestoreBackupSourceOutputReference | GoogleAlloydbClusterRestoreBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_name: {
      value: cdktf.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterRestoreBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterRestoreBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterRestoreBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupName = value.backupName;
    }
  }

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }
}
export interface GoogleAlloydbClusterRestoreContinuousBackupSource {
  /**
  * The name of the source cluster that this cluster is restored from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#cluster GoogleAlloydbCluster#cluster}
  */
  readonly cluster: string;
  /**
  * The point in time that this cluster is restored to, in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#point_in_time GoogleAlloydbCluster#point_in_time}
  */
  readonly pointInTime: string;
}

export function googleAlloydbClusterRestoreContinuousBackupSourceToTerraform(struct?: GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference | GoogleAlloydbClusterRestoreContinuousBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
  }
}


export function googleAlloydbClusterRestoreContinuousBackupSourceToHclTerraform(struct?: GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference | GoogleAlloydbClusterRestoreContinuousBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time: {
      value: cdktf.stringToHclTerraform(struct!.pointInTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterRestoreContinuousBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterRestoreContinuousBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._pointInTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._pointInTime = value.pointInTime;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // point_in_time - computed: false, optional: false, required: true
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }
}
export interface GoogleAlloydbClusterSecondaryConfig {
  /**
  * Name of the primary cluster must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#primary_cluster_name GoogleAlloydbCluster#primary_cluster_name}
  */
  readonly primaryClusterName: string;
}

export function googleAlloydbClusterSecondaryConfigToTerraform(struct?: GoogleAlloydbClusterSecondaryConfigOutputReference | GoogleAlloydbClusterSecondaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_cluster_name: cdktf.stringToTerraform(struct!.primaryClusterName),
  }
}


export function googleAlloydbClusterSecondaryConfigToHclTerraform(struct?: GoogleAlloydbClusterSecondaryConfigOutputReference | GoogleAlloydbClusterSecondaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.primaryClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbClusterSecondaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbClusterSecondaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryClusterName = this._primaryClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbClusterSecondaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryClusterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryClusterName = value.primaryClusterName;
    }
  }

  // primary_cluster_name - computed: false, optional: false, required: true
  private _primaryClusterName?: string; 
  public get primaryClusterName() {
    return this.getStringAttribute('primary_cluster_name');
  }
  public set primaryClusterName(value: string) {
    this._primaryClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClusterNameInput() {
    return this._primaryClusterName;
  }
}
export interface GoogleAlloydbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}
  */
  readonly update?: string;
}

export function googleAlloydbClusterTimeoutsToTerraform(struct?: GoogleAlloydbClusterTimeouts | cdktf.IResolvable): any {
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


export function googleAlloydbClusterTimeoutsToHclTerraform(struct?: GoogleAlloydbClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleAlloydbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAlloydbClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAlloydbClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster google_alloydb_cluster}
*/
export class GoogleAlloydbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAlloydbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAlloydbCluster to import
  * @param importFromId The id of the existing GoogleAlloydbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAlloydbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_cluster google_alloydb_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAlloydbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAlloydbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.25.0',
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
    this._annotations = config.annotations;
    this._clusterId = config.clusterId;
    this._clusterType = config.clusterType;
    this._databaseVersion = config.databaseVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._etag = config.etag;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._skipAwaitMajorVersionUpgrade = config.skipAwaitMajorVersionUpgrade;
    this._subscriptionType = config.subscriptionType;
    this._automatedBackupPolicy.internalValue = config.automatedBackupPolicy;
    this._continuousBackupConfig.internalValue = config.continuousBackupConfig;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._initialUser.internalValue = config.initialUser;
    this._maintenanceUpdatePolicy.internalValue = config.maintenanceUpdatePolicy;
    this._networkConfig.internalValue = config.networkConfig;
    this._pscConfig.internalValue = config.pscConfig;
    this._restoreBackupSource.internalValue = config.restoreBackupSource;
    this._restoreContinuousBackupSource.internalValue = config.restoreContinuousBackupSource;
    this._secondaryConfig.internalValue = config.secondaryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // backup_source - computed: true, optional: false, required: false
  private _backupSource = new GoogleAlloydbClusterBackupSourceList(this, "backup_source", false);
  public get backupSource() {
    return this._backupSource;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // continuous_backup_info - computed: true, optional: false, required: false
  private _continuousBackupInfo = new GoogleAlloydbClusterContinuousBackupInfoList(this, "continuous_backup_info", false);
  public get continuousBackupInfo() {
    return this._continuousBackupInfo;
  }

  // database_version - computed: true, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // encryption_info - computed: true, optional: false, required: false
  private _encryptionInfo = new GoogleAlloydbClusterEncryptionInfoList(this, "encryption_info", false);
  public get encryptionInfo() {
    return this._encryptionInfo;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // migration_source - computed: true, optional: false, required: false
  private _migrationSource = new GoogleAlloydbClusterMigrationSourceList(this, "migration_source", false);
  public get migrationSource() {
    return this._migrationSource;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // skip_await_major_version_upgrade - computed: false, optional: true, required: false
  private _skipAwaitMajorVersionUpgrade?: boolean | cdktf.IResolvable; 
  public get skipAwaitMajorVersionUpgrade() {
    return this.getBooleanAttribute('skip_await_major_version_upgrade');
  }
  public set skipAwaitMajorVersionUpgrade(value: boolean | cdktf.IResolvable) {
    this._skipAwaitMajorVersionUpgrade = value;
  }
  public resetSkipAwaitMajorVersionUpgrade() {
    this._skipAwaitMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAwaitMajorVersionUpgradeInput() {
    return this._skipAwaitMajorVersionUpgrade;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_type - computed: true, optional: true, required: false
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  public resetSubscriptionType() {
    this._subscriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // trial_metadata - computed: true, optional: false, required: false
  private _trialMetadata = new GoogleAlloydbClusterTrialMetadataList(this, "trial_metadata", false);
  public get trialMetadata() {
    return this._trialMetadata;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // automated_backup_policy - computed: false, optional: true, required: false
  private _automatedBackupPolicy = new GoogleAlloydbClusterAutomatedBackupPolicyOutputReference(this, "automated_backup_policy");
  public get automatedBackupPolicy() {
    return this._automatedBackupPolicy;
  }
  public putAutomatedBackupPolicy(value: GoogleAlloydbClusterAutomatedBackupPolicy) {
    this._automatedBackupPolicy.internalValue = value;
  }
  public resetAutomatedBackupPolicy() {
    this._automatedBackupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupPolicyInput() {
    return this._automatedBackupPolicy.internalValue;
  }

  // continuous_backup_config - computed: false, optional: true, required: false
  private _continuousBackupConfig = new GoogleAlloydbClusterContinuousBackupConfigOutputReference(this, "continuous_backup_config");
  public get continuousBackupConfig() {
    return this._continuousBackupConfig;
  }
  public putContinuousBackupConfig(value: GoogleAlloydbClusterContinuousBackupConfig) {
    this._continuousBackupConfig.internalValue = value;
  }
  public resetContinuousBackupConfig() {
    this._continuousBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousBackupConfigInput() {
    return this._continuousBackupConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleAlloydbClusterEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleAlloydbClusterEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // initial_user - computed: false, optional: true, required: false
  private _initialUser = new GoogleAlloydbClusterInitialUserOutputReference(this, "initial_user");
  public get initialUser() {
    return this._initialUser;
  }
  public putInitialUser(value: GoogleAlloydbClusterInitialUser) {
    this._initialUser.internalValue = value;
  }
  public resetInitialUser() {
    this._initialUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialUserInput() {
    return this._initialUser.internalValue;
  }

  // maintenance_update_policy - computed: false, optional: true, required: false
  private _maintenanceUpdatePolicy = new GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference(this, "maintenance_update_policy");
  public get maintenanceUpdatePolicy() {
    return this._maintenanceUpdatePolicy;
  }
  public putMaintenanceUpdatePolicy(value: GoogleAlloydbClusterMaintenanceUpdatePolicy) {
    this._maintenanceUpdatePolicy.internalValue = value;
  }
  public resetMaintenanceUpdatePolicy() {
    this._maintenanceUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceUpdatePolicyInput() {
    return this._maintenanceUpdatePolicy.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleAlloydbClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleAlloydbClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // psc_config - computed: false, optional: true, required: false
  private _pscConfig = new GoogleAlloydbClusterPscConfigOutputReference(this, "psc_config");
  public get pscConfig() {
    return this._pscConfig;
  }
  public putPscConfig(value: GoogleAlloydbClusterPscConfig) {
    this._pscConfig.internalValue = value;
  }
  public resetPscConfig() {
    this._pscConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigInput() {
    return this._pscConfig.internalValue;
  }

  // restore_backup_source - computed: false, optional: true, required: false
  private _restoreBackupSource = new GoogleAlloydbClusterRestoreBackupSourceOutputReference(this, "restore_backup_source");
  public get restoreBackupSource() {
    return this._restoreBackupSource;
  }
  public putRestoreBackupSource(value: GoogleAlloydbClusterRestoreBackupSource) {
    this._restoreBackupSource.internalValue = value;
  }
  public resetRestoreBackupSource() {
    this._restoreBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupSourceInput() {
    return this._restoreBackupSource.internalValue;
  }

  // restore_continuous_backup_source - computed: false, optional: true, required: false
  private _restoreContinuousBackupSource = new GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference(this, "restore_continuous_backup_source");
  public get restoreContinuousBackupSource() {
    return this._restoreContinuousBackupSource;
  }
  public putRestoreContinuousBackupSource(value: GoogleAlloydbClusterRestoreContinuousBackupSource) {
    this._restoreContinuousBackupSource.internalValue = value;
  }
  public resetRestoreContinuousBackupSource() {
    this._restoreContinuousBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreContinuousBackupSourceInput() {
    return this._restoreContinuousBackupSource.internalValue;
  }

  // secondary_config - computed: false, optional: true, required: false
  private _secondaryConfig = new GoogleAlloydbClusterSecondaryConfigOutputReference(this, "secondary_config");
  public get secondaryConfig() {
    return this._secondaryConfig;
  }
  public putSecondaryConfig(value: GoogleAlloydbClusterSecondaryConfig) {
    this._secondaryConfig.internalValue = value;
  }
  public resetSecondaryConfig() {
    this._secondaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryConfigInput() {
    return this._secondaryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAlloydbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAlloydbClusterTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      skip_await_major_version_upgrade: cdktf.booleanToTerraform(this._skipAwaitMajorVersionUpgrade),
      subscription_type: cdktf.stringToTerraform(this._subscriptionType),
      automated_backup_policy: googleAlloydbClusterAutomatedBackupPolicyToTerraform(this._automatedBackupPolicy.internalValue),
      continuous_backup_config: googleAlloydbClusterContinuousBackupConfigToTerraform(this._continuousBackupConfig.internalValue),
      encryption_config: googleAlloydbClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      initial_user: googleAlloydbClusterInitialUserToTerraform(this._initialUser.internalValue),
      maintenance_update_policy: googleAlloydbClusterMaintenanceUpdatePolicyToTerraform(this._maintenanceUpdatePolicy.internalValue),
      network_config: googleAlloydbClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      psc_config: googleAlloydbClusterPscConfigToTerraform(this._pscConfig.internalValue),
      restore_backup_source: googleAlloydbClusterRestoreBackupSourceToTerraform(this._restoreBackupSource.internalValue),
      restore_continuous_backup_source: googleAlloydbClusterRestoreContinuousBackupSourceToTerraform(this._restoreContinuousBackupSource.internalValue),
      secondary_config: googleAlloydbClusterSecondaryConfigToTerraform(this._secondaryConfig.internalValue),
      timeouts: googleAlloydbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_version: {
        value: cdktf.stringToHclTerraform(this._databaseVersion),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      skip_await_major_version_upgrade: {
        value: cdktf.booleanToHclTerraform(this._skipAwaitMajorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_type: {
        value: cdktf.stringToHclTerraform(this._subscriptionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_backup_policy: {
        value: googleAlloydbClusterAutomatedBackupPolicyToHclTerraform(this._automatedBackupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterAutomatedBackupPolicyList",
      },
      continuous_backup_config: {
        value: googleAlloydbClusterContinuousBackupConfigToHclTerraform(this._continuousBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterContinuousBackupConfigList",
      },
      encryption_config: {
        value: googleAlloydbClusterEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterEncryptionConfigList",
      },
      initial_user: {
        value: googleAlloydbClusterInitialUserToHclTerraform(this._initialUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterInitialUserList",
      },
      maintenance_update_policy: {
        value: googleAlloydbClusterMaintenanceUpdatePolicyToHclTerraform(this._maintenanceUpdatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterMaintenanceUpdatePolicyList",
      },
      network_config: {
        value: googleAlloydbClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterNetworkConfigList",
      },
      psc_config: {
        value: googleAlloydbClusterPscConfigToHclTerraform(this._pscConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterPscConfigList",
      },
      restore_backup_source: {
        value: googleAlloydbClusterRestoreBackupSourceToHclTerraform(this._restoreBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterRestoreBackupSourceList",
      },
      restore_continuous_backup_source: {
        value: googleAlloydbClusterRestoreContinuousBackupSourceToHclTerraform(this._restoreContinuousBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterRestoreContinuousBackupSourceList",
      },
      secondary_config: {
        value: googleAlloydbClusterSecondaryConfigToHclTerraform(this._secondaryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbClusterSecondaryConfigList",
      },
      timeouts: {
        value: googleAlloydbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAlloydbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
