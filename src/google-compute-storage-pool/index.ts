/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeStoragePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}
  */
  readonly capacityProvisioningType?: string;
  /**
  * Whether Terraform will be prevented from destroying the StoragePool.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the StoragePool will fail.
  * When the field is set to false, deleting the StoragePool is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * A description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}
  */
  readonly description?: string;
  /**
  * Labels to apply to this storage pool. These can be later modified by the setLabels method.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#labels GoogleComputeStoragePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resource. Provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with RFC1035.
  * Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter,
  * and all following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}
  */
  readonly name: string;
  /**
  * Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}
  */
  readonly performanceProvisioningType?: string;
  /**
  * Size, in GiB, of the storage pool. For more information about the size limits,
  * see https://cloud.google.com/compute/docs/disks/storage-pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}
  */
  readonly poolProvisionedCapacityGb: string;
  /**
  * Provisioned IOPS of the storage pool.
  * Only relevant if the storage pool type is 'hyperdisk-balanced'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}
  */
  readonly poolProvisionedIops?: string;
  /**
  * Provisioned throughput, in MB/s, of the storage pool.
  * Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}
  */
  readonly poolProvisionedThroughput: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}
  */
  readonly project?: string;
  /**
  * Type of the storage pool. For example, the
  * following are valid values:
  * 
  * * 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
  * * 'hyperdisk-throughput'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}
  */
  readonly storagePoolType: string;
  /**
  * A reference to the zone where the storage pool resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}
  */
  readonly timeouts?: GoogleComputeStoragePoolTimeouts;
}
export interface GoogleComputeStoragePoolResourceStatus {
}

export function googleComputeStoragePoolResourceStatusToTerraform(struct?: GoogleComputeStoragePoolResourceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeStoragePoolResourceStatusToHclTerraform(struct?: GoogleComputeStoragePoolResourceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeStoragePoolResourceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeStoragePoolResourceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeStoragePoolResourceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getStringAttribute('disk_count');
  }

  // last_resize_timestamp - computed: true, optional: false, required: false
  public get lastResizeTimestamp() {
    return this.getStringAttribute('last_resize_timestamp');
  }

  // max_total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get maxTotalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('max_total_provisioned_disk_capacity_gb');
  }

  // pool_used_capacity_bytes - computed: true, optional: false, required: false
  public get poolUsedCapacityBytes() {
    return this.getStringAttribute('pool_used_capacity_bytes');
  }

  // pool_used_iops - computed: true, optional: false, required: false
  public get poolUsedIops() {
    return this.getStringAttribute('pool_used_iops');
  }

  // pool_used_throughput - computed: true, optional: false, required: false
  public get poolUsedThroughput() {
    return this.getStringAttribute('pool_used_throughput');
  }

  // pool_user_written_bytes - computed: true, optional: false, required: false
  public get poolUserWrittenBytes() {
    return this.getStringAttribute('pool_user_written_bytes');
  }

  // total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get totalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('total_provisioned_disk_capacity_gb');
  }

  // total_provisioned_disk_iops - computed: true, optional: false, required: false
  public get totalProvisionedDiskIops() {
    return this.getStringAttribute('total_provisioned_disk_iops');
  }

  // total_provisioned_disk_throughput - computed: true, optional: false, required: false
  public get totalProvisionedDiskThroughput() {
    return this.getStringAttribute('total_provisioned_disk_throughput');
  }
}

export class GoogleComputeStoragePoolResourceStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeStoragePoolResourceStatusOutputReference {
    return new GoogleComputeStoragePoolResourceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeStoragePoolStatus {
}

export function googleComputeStoragePoolStatusToTerraform(struct?: GoogleComputeStoragePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeStoragePoolStatusToHclTerraform(struct?: GoogleComputeStoragePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeStoragePoolStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeStoragePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeStoragePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getStringAttribute('disk_count');
  }

  // last_resize_timestamp - computed: true, optional: false, required: false
  public get lastResizeTimestamp() {
    return this.getStringAttribute('last_resize_timestamp');
  }

  // max_total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get maxTotalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('max_total_provisioned_disk_capacity_gb');
  }

  // pool_used_capacity_bytes - computed: true, optional: false, required: false
  public get poolUsedCapacityBytes() {
    return this.getStringAttribute('pool_used_capacity_bytes');
  }

  // pool_used_iops - computed: true, optional: false, required: false
  public get poolUsedIops() {
    return this.getStringAttribute('pool_used_iops');
  }

  // pool_used_throughput - computed: true, optional: false, required: false
  public get poolUsedThroughput() {
    return this.getStringAttribute('pool_used_throughput');
  }

  // pool_user_written_bytes - computed: true, optional: false, required: false
  public get poolUserWrittenBytes() {
    return this.getStringAttribute('pool_user_written_bytes');
  }

  // total_provisioned_disk_capacity_gb - computed: true, optional: false, required: false
  public get totalProvisionedDiskCapacityGb() {
    return this.getStringAttribute('total_provisioned_disk_capacity_gb');
  }

  // total_provisioned_disk_iops - computed: true, optional: false, required: false
  public get totalProvisionedDiskIops() {
    return this.getStringAttribute('total_provisioned_disk_iops');
  }

  // total_provisioned_disk_throughput - computed: true, optional: false, required: false
  public get totalProvisionedDiskThroughput() {
    return this.getStringAttribute('total_provisioned_disk_throughput');
  }
}

export class GoogleComputeStoragePoolStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeStoragePoolStatusOutputReference {
    return new GoogleComputeStoragePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeStoragePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}
  */
  readonly update?: string;
}

export function googleComputeStoragePoolTimeoutsToTerraform(struct?: GoogleComputeStoragePoolTimeouts | cdktf.IResolvable): any {
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


export function googleComputeStoragePoolTimeoutsToHclTerraform(struct?: GoogleComputeStoragePoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeStoragePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeStoragePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeStoragePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool google_compute_storage_pool}
*/
export class GoogleComputeStoragePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeStoragePool to import
  * @param importFromId The id of the existing GoogleComputeStoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeStoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_compute_storage_pool google_compute_storage_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeStoragePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeStoragePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_storage_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.49.2',
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
    this._capacityProvisioningType = config.capacityProvisioningType;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._performanceProvisioningType = config.performanceProvisioningType;
    this._poolProvisionedCapacityGb = config.poolProvisionedCapacityGb;
    this._poolProvisionedIops = config.poolProvisionedIops;
    this._poolProvisionedThroughput = config.poolProvisionedThroughput;
    this._project = config.project;
    this._storagePoolType = config.storagePoolType;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_provisioning_type - computed: true, optional: true, required: false
  private _capacityProvisioningType?: string; 
  public get capacityProvisioningType() {
    return this.getStringAttribute('capacity_provisioning_type');
  }
  public set capacityProvisioningType(value: string) {
    this._capacityProvisioningType = value;
  }
  public resetCapacityProvisioningType() {
    this._capacityProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProvisioningTypeInput() {
    return this._capacityProvisioningType;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // performance_provisioning_type - computed: true, optional: true, required: false
  private _performanceProvisioningType?: string; 
  public get performanceProvisioningType() {
    return this.getStringAttribute('performance_provisioning_type');
  }
  public set performanceProvisioningType(value: string) {
    this._performanceProvisioningType = value;
  }
  public resetPerformanceProvisioningType() {
    this._performanceProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProvisioningTypeInput() {
    return this._performanceProvisioningType;
  }

  // pool_provisioned_capacity_gb - computed: false, optional: false, required: true
  private _poolProvisionedCapacityGb?: string; 
  public get poolProvisionedCapacityGb() {
    return this.getStringAttribute('pool_provisioned_capacity_gb');
  }
  public set poolProvisionedCapacityGb(value: string) {
    this._poolProvisionedCapacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedCapacityGbInput() {
    return this._poolProvisionedCapacityGb;
  }

  // pool_provisioned_iops - computed: false, optional: true, required: false
  private _poolProvisionedIops?: string; 
  public get poolProvisionedIops() {
    return this.getStringAttribute('pool_provisioned_iops');
  }
  public set poolProvisionedIops(value: string) {
    this._poolProvisionedIops = value;
  }
  public resetPoolProvisionedIops() {
    this._poolProvisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedIopsInput() {
    return this._poolProvisionedIops;
  }

  // pool_provisioned_throughput - computed: false, optional: false, required: true
  private _poolProvisionedThroughput?: string; 
  public get poolProvisionedThroughput() {
    return this.getStringAttribute('pool_provisioned_throughput');
  }
  public set poolProvisionedThroughput(value: string) {
    this._poolProvisionedThroughput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProvisionedThroughputInput() {
    return this._poolProvisionedThroughput;
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

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new GoogleComputeStoragePoolResourceStatusList(this, "resource_status", false);
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleComputeStoragePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // storage_pool_type - computed: false, optional: false, required: true
  private _storagePoolType?: string; 
  public get storagePoolType() {
    return this.getStringAttribute('storage_pool_type');
  }
  public set storagePoolType(value: string) {
    this._storagePoolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolTypeInput() {
    return this._storagePoolType;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeStoragePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeStoragePoolTimeouts) {
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
      capacity_provisioning_type: cdktf.stringToTerraform(this._capacityProvisioningType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      performance_provisioning_type: cdktf.stringToTerraform(this._performanceProvisioningType),
      pool_provisioned_capacity_gb: cdktf.stringToTerraform(this._poolProvisionedCapacityGb),
      pool_provisioned_iops: cdktf.stringToTerraform(this._poolProvisionedIops),
      pool_provisioned_throughput: cdktf.stringToTerraform(this._poolProvisionedThroughput),
      project: cdktf.stringToTerraform(this._project),
      storage_pool_type: cdktf.stringToTerraform(this._storagePoolType),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: googleComputeStoragePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_provisioning_type: {
        value: cdktf.stringToHclTerraform(this._capacityProvisioningType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_provisioning_type: {
        value: cdktf.stringToHclTerraform(this._performanceProvisioningType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_capacity_gb: {
        value: cdktf.stringToHclTerraform(this._poolProvisionedCapacityGb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_iops: {
        value: cdktf.stringToHclTerraform(this._poolProvisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_provisioned_throughput: {
        value: cdktf.stringToHclTerraform(this._poolProvisionedThroughput),
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
      storage_pool_type: {
        value: cdktf.stringToHclTerraform(this._storagePoolType),
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
      timeouts: {
        value: googleComputeStoragePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeStoragePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
