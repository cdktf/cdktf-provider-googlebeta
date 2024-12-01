/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeInstanceFromMachineImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, allows Terraform to stop the instance to update its properties. If you try to update a property that requires stopping the instance without setting this field, the update will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#allow_stopping_for_update GoogleComputeInstanceFromMachineImage#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * Whether sending and receiving of packets with non-matching source or destination IPs is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#can_ip_forward GoogleComputeInstanceFromMachineImage#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Whether deletion protection is enabled on this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#deletion_protection GoogleComputeInstanceFromMachineImage#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * A brief description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#description GoogleComputeInstanceFromMachineImage#description}
  */
  readonly description?: string;
  /**
  * Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#desired_status GoogleComputeInstanceFromMachineImage#desired_status}
  */
  readonly desiredStatus?: string;
  /**
  * Whether the instance has virtual displays enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_display GoogleComputeInstanceFromMachineImage#enable_display}
  */
  readonly enableDisplay?: boolean | cdktf.IResolvable;
  /**
  * A custom hostname for the instance. Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z]([-a-z0-9]*[a-z0-9]), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#hostname GoogleComputeInstanceFromMachineImage#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Action to be taken when a customer's encryption key is revoked. Supports "STOP" and "NONE", with "NONE" being the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#key_revocation_action_type GoogleComputeInstanceFromMachineImage#key_revocation_action_type}
  */
  readonly keyRevocationActionType?: string;
  /**
  * A set of key/value label pairs assigned to the instance.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#labels GoogleComputeInstanceFromMachineImage#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#machine_type GoogleComputeInstanceFromMachineImage#machine_type}
  */
  readonly machineType?: string;
  /**
  * Metadata key/value pairs made available within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#metadata GoogleComputeInstanceFromMachineImage#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Metadata startup scripts made available within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#metadata_startup_script GoogleComputeInstanceFromMachineImage#metadata_startup_script}
  */
  readonly metadataStartupScript?: string;
  /**
  * The minimum CPU platform specified for the VM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#min_cpu_platform GoogleComputeInstanceFromMachineImage#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The name of the instance. One of name or self_link must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}
  */
  readonly name: string;
  /**
  * Partner Metadata Map made available within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#partner_metadata GoogleComputeInstanceFromMachineImage#partner_metadata}
  */
  readonly partnerMetadata?: { [key: string]: string };
  /**
  * The ID of the project in which the resource belongs. If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#project GoogleComputeInstanceFromMachineImage#project}
  */
  readonly project?: string;
  /**
  * A list of self_links of resource policies to attach to the instance. Currently a max of 1 resource policy is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#resource_policies GoogleComputeInstanceFromMachineImage#resource_policies}
  */
  readonly resourcePolicies?: string[];
  /**
  * Name or self link of a machine image to create the instance from on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#source_machine_image GoogleComputeInstanceFromMachineImage#source_machine_image}
  */
  readonly sourceMachineImage: string;
  /**
  * The list of tags attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#tags GoogleComputeInstanceFromMachineImage#tags}
  */
  readonly tags?: string[];
  /**
  * The zone of the instance. If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#zone GoogleComputeInstanceFromMachineImage#zone}
  */
  readonly zone?: string;
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#advanced_machine_features GoogleComputeInstanceFromMachineImage#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_config GoogleComputeInstanceFromMachineImage#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#guest_accelerator GoogleComputeInstanceFromMachineImage#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleComputeInstanceFromMachineImageGuestAccelerator[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_interface GoogleComputeInstanceFromMachineImage#network_interface}
  */
  readonly networkInterface?: GoogleComputeInstanceFromMachineImageNetworkInterface[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_performance_config GoogleComputeInstanceFromMachineImage#network_performance_config}
  */
  readonly networkPerformanceConfig?: GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#params GoogleComputeInstanceFromMachineImage#params}
  */
  readonly params?: GoogleComputeInstanceFromMachineImageParams;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#reservation_affinity GoogleComputeInstanceFromMachineImage#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleComputeInstanceFromMachineImageReservationAffinity;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#scheduling GoogleComputeInstanceFromMachineImage#scheduling}
  */
  readonly scheduling?: GoogleComputeInstanceFromMachineImageScheduling;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#service_account GoogleComputeInstanceFromMachineImage#service_account}
  */
  readonly serviceAccount?: GoogleComputeInstanceFromMachineImageServiceAccount;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#shielded_instance_config GoogleComputeInstanceFromMachineImage#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleComputeInstanceFromMachineImageShieldedInstanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#timeouts GoogleComputeInstanceFromMachineImage#timeouts}
  */
  readonly timeouts?: GoogleComputeInstanceFromMachineImageTimeouts;
}
export interface GoogleComputeInstanceFromMachineImageAttachedDisk {
}

export function googleComputeInstanceFromMachineImageAttachedDiskToTerraform(struct?: GoogleComputeInstanceFromMachineImageAttachedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeInstanceFromMachineImageAttachedDiskToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageAttachedDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageAttachedDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageAttachedDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: false
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class GoogleComputeInstanceFromMachineImageAttachedDiskList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference {
    return new GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageBootDiskInitializeParams {
}

export function googleComputeInstanceFromMachineImageBootDiskInitializeParamsToTerraform(struct?: GoogleComputeInstanceFromMachineImageBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeInstanceFromMachineImageBootDiskInitializeParamsToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageBootDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageBootDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageBootDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_confidential_compute - computed: true, optional: false, required: false
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // provisioned_iops - computed: true, optional: false, required: false
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  public get provisionedThroughput() {
    return this.getNumberAttribute('provisioned_throughput');
  }

  // resource_manager_tags - computed: true, optional: false, required: false
  private _resourceManagerTags = new cdktf.StringMap(this, "resource_manager_tags");
  public get resourceManagerTags() {
    return this._resourceManagerTags;
  }

  // resource_policies - computed: true, optional: false, required: false
  public get resourcePolicies() {
    return this.getListAttribute('resource_policies');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // storage_pool - computed: true, optional: false, required: false
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference {
    return new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageBootDisk {
}

export function googleComputeInstanceFromMachineImageBootDiskToTerraform(struct?: GoogleComputeInstanceFromMachineImageBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeInstanceFromMachineImageBootDiskToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageBootDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeInstanceFromMachineImageBootDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageBootDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageBootDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // disk_encryption_key_raw - computed: true, optional: false, required: false
  public get diskEncryptionKeyRaw() {
    return this.getStringAttribute('disk_encryption_key_raw');
  }

  // disk_encryption_key_sha256 - computed: true, optional: false, required: false
  public get diskEncryptionKeySha256() {
    return this.getStringAttribute('disk_encryption_key_sha256');
  }

  // initialize_params - computed: true, optional: false, required: false
  private _initializeParams = new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList(this, "initialize_params", false);
  public get initializeParams() {
    return this._initializeParams;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // kms_key_self_link - computed: true, optional: false, required: false
  public get kmsKeySelfLink() {
    return this.getStringAttribute('kms_key_self_link');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export class GoogleComputeInstanceFromMachineImageBootDiskList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceFromMachineImageBootDiskOutputReference {
    return new GoogleComputeInstanceFromMachineImageBootDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageScratchDisk {
}

export function googleComputeInstanceFromMachineImageScratchDiskToTerraform(struct?: GoogleComputeInstanceFromMachineImageScratchDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeInstanceFromMachineImageScratchDiskToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageScratchDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeInstanceFromMachineImageScratchDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageScratchDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageScratchDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class GoogleComputeInstanceFromMachineImageScratchDiskList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeInstanceFromMachineImageScratchDiskOutputReference {
    return new GoogleComputeInstanceFromMachineImageScratchDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures {
  /**
  * Whether to enable nested virtualization or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_nested_virtualization GoogleComputeInstanceFromMachineImage#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#threads_per_core GoogleComputeInstanceFromMachineImage#threads_per_core}
  */
  readonly threadsPerCore?: number;
  /**
  * Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#turbo_mode GoogleComputeInstanceFromMachineImage#turbo_mode}
  */
  readonly turboMode?: string;
  /**
  * The number of physical cores to expose to an instance. Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#visible_core_count GoogleComputeInstanceFromMachineImage#visible_core_count}
  */
  readonly visibleCoreCount?: number;
}

export function googleComputeInstanceFromMachineImageAdvancedMachineFeaturesToTerraform(struct?: GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference | GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
    turbo_mode: cdktf.stringToTerraform(struct!.turboMode),
    visible_core_count: cdktf.numberToTerraform(struct!.visibleCoreCount),
  }
}


export function googleComputeInstanceFromMachineImageAdvancedMachineFeaturesToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference | GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    turbo_mode: {
      value: cdktf.stringToHclTerraform(struct!.turboMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible_core_count: {
      value: cdktf.numberToHclTerraform(struct!.visibleCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    if (this._turboMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.turboMode = this._turboMode;
    }
    if (this._visibleCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleCoreCount = this._visibleCoreCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._threadsPerCore = undefined;
      this._turboMode = undefined;
      this._visibleCoreCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._threadsPerCore = value.threadsPerCore;
      this._turboMode = value.turboMode;
      this._visibleCoreCount = value.visibleCoreCount;
    }
  }

  // enable_nested_virtualization - computed: true, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // threads_per_core - computed: true, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }

  // turbo_mode - computed: true, optional: true, required: false
  private _turboMode?: string; 
  public get turboMode() {
    return this.getStringAttribute('turbo_mode');
  }
  public set turboMode(value: string) {
    this._turboMode = value;
  }
  public resetTurboMode() {
    this._turboMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turboModeInput() {
    return this._turboMode;
  }

  // visible_core_count - computed: true, optional: true, required: false
  private _visibleCoreCount?: number; 
  public get visibleCoreCount() {
    return this.getNumberAttribute('visible_core_count');
  }
  public set visibleCoreCount(value: number) {
    this._visibleCoreCount = value;
  }
  public resetVisibleCoreCount() {
    this._visibleCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleCoreCountInput() {
    return this._visibleCoreCount;
  }
}
export interface GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig {
  /**
  * 
  * 								The confidential computing technology the instance uses.
  * 								SEV is an AMD feature. TDX is an Intel feature. One of the following
  * 								values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
  * 								"AMD Milan" is currently required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_type GoogleComputeInstanceFromMachineImage#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_confidential_compute GoogleComputeInstanceFromMachineImage#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
}

export function googleComputeInstanceFromMachineImageConfidentialInstanceConfigToTerraform(struct?: GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference | GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}


export function googleComputeInstanceFromMachineImageConfidentialInstanceConfigToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference | GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_compute: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // confidential_instance_type - computed: true, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
}
export interface GoogleComputeInstanceFromMachineImageGuestAccelerator {
  /**
  * The number of the guest accelerator cards exposed to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#count GoogleComputeInstanceFromMachineImage#count}
  */
  readonly count: number;
  /**
  * The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}
  */
  readonly type: string;
}

export function googleComputeInstanceFromMachineImageGuestAcceleratorToTerraform(struct?: GoogleComputeInstanceFromMachineImageGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeInstanceFromMachineImageGuestAcceleratorToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageGuestAccelerator | cdktf.IResolvable): any {
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

export class GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class GoogleComputeInstanceFromMachineImageGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference {
    return new GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig {
  /**
  * The IP address that is be 1:1 mapped to the instance's network ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#nat_ip GoogleComputeInstanceFromMachineImage#nat_ip}
  */
  readonly natIp?: string;
  /**
  * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}
  */
  readonly networkTier?: string;
  /**
  * The DNS domain name for the public PTR record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

export function googleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigToTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}


export function googleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natIp = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natIp = value.natIp;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
    }
  }

  // nat_ip - computed: true, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: true, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference {
    return new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange {
  /**
  * The IP CIDR range represented by this alias IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#ip_cidr_range GoogleComputeInstanceFromMachineImage#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_range_name GoogleComputeInstanceFromMachineImage#subnetwork_range_name}
  */
  readonly subnetworkRangeName?: string;
}

export function googleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeToTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: cdktf.stringToTerraform(struct!.ipCidrRange),
    subnetwork_range_name: cdktf.stringToTerraform(struct!.subnetworkRangeName),
  }
}


export function googleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.ipCidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_range_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._subnetworkRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkRangeName = this._subnetworkRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._subnetworkRangeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._subnetworkRangeName = value.subnetworkRangeName;
    }
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // subnetwork_range_name - computed: true, optional: true, required: false
  private _subnetworkRangeName?: string; 
  public get subnetworkRangeName() {
    return this.getStringAttribute('subnetwork_range_name');
  }
  public set subnetworkRangeName(value: string) {
    this._subnetworkRangeName = value;
  }
  public resetSubnetworkRangeName() {
    this._subnetworkRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkRangeNameInput() {
    return this._subnetworkRangeName;
  }
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference {
    return new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig {
  /**
  * The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6 GoogleComputeInstanceFromMachineImage#external_ipv6}
  */
  readonly externalIpv6?: string;
  /**
  * The prefix length of the external IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#external_ipv6_prefix_length}
  */
  readonly externalIpv6PrefixLength?: string;
  /**
  * The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}
  */
  readonly name?: string;
  /**
  * The service-level to be provided for IPv6 traffic when the subnet has an external subnet. Only PREMIUM tier is valid for IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}
  */
  readonly networkTier: string;
  /**
  * The domain name to be used when creating DNSv6 records for the external IPv6 ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}
  */
  readonly publicPtrDomainName?: string;
}

export function googleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigToTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ipv6: cdktf.stringToTerraform(struct!.externalIpv6),
    external_ipv6_prefix_length: cdktf.stringToTerraform(struct!.externalIpv6PrefixLength),
    name: cdktf.stringToTerraform(struct!.name),
    network_tier: cdktf.stringToTerraform(struct!.networkTier),
    public_ptr_domain_name: cdktf.stringToTerraform(struct!.publicPtrDomainName),
  }
}


export function googleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_ipv6_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tier: {
      value: cdktf.stringToHclTerraform(struct!.networkTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ptr_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.publicPtrDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6 = this._externalIpv6;
    }
    if (this._externalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv6PrefixLength = this._externalIpv6PrefixLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTier = this._networkTier;
    }
    if (this._publicPtrDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPtrDomainName = this._publicPtrDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIpv6 = undefined;
      this._externalIpv6PrefixLength = undefined;
      this._name = undefined;
      this._networkTier = undefined;
      this._publicPtrDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIpv6 = value.externalIpv6;
      this._externalIpv6PrefixLength = value.externalIpv6PrefixLength;
      this._name = value.name;
      this._networkTier = value.networkTier;
      this._publicPtrDomainName = value.publicPtrDomainName;
    }
  }

  // external_ipv6 - computed: true, optional: true, required: false
  private _externalIpv6?: string; 
  public get externalIpv6() {
    return this.getStringAttribute('external_ipv6');
  }
  public set externalIpv6(value: string) {
    this._externalIpv6 = value;
  }
  public resetExternalIpv6() {
    this._externalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6Input() {
    return this._externalIpv6;
  }

  // external_ipv6_prefix_length - computed: true, optional: true, required: false
  private _externalIpv6PrefixLength?: string; 
  public get externalIpv6PrefixLength() {
    return this.getStringAttribute('external_ipv6_prefix_length');
  }
  public set externalIpv6PrefixLength(value: string) {
    this._externalIpv6PrefixLength = value;
  }
  public resetExternalIpv6PrefixLength() {
    this._externalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv6PrefixLengthInput() {
    return this._externalIpv6PrefixLength;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // public_ptr_domain_name - computed: true, optional: true, required: false
  private _publicPtrDomainName?: string; 
  public get publicPtrDomainName() {
    return this.getStringAttribute('public_ptr_domain_name');
  }
  public set publicPtrDomainName(value: string) {
    this._publicPtrDomainName = value;
  }
  public resetPublicPtrDomainName() {
    this._publicPtrDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPtrDomainNameInput() {
    return this._publicPtrDomainName;
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference {
    return new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageNetworkInterface {
  /**
  * The prefix length of the primary internal IPv6 range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#internal_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#internal_ipv6_prefix_length}
  */
  readonly internalIpv6PrefixLength?: number;
  /**
  * An IPv6 internal network address for this network interface. If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#ipv6_address GoogleComputeInstanceFromMachineImage#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The name or self_link of the network attached to this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network GoogleComputeInstanceFromMachineImage#network}
  */
  readonly network?: string;
  /**
  * The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_attachment GoogleComputeInstanceFromMachineImage#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * The private IP address assigned to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#network_ip GoogleComputeInstanceFromMachineImage#network_ip}
  */
  readonly networkIp?: string;
  /**
  * The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#nic_type GoogleComputeInstanceFromMachineImage#nic_type}
  */
  readonly nicType?: string;
  /**
  * The networking queue count that's specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#queue_count GoogleComputeInstanceFromMachineImage#queue_count}
  */
  readonly queueCount?: number;
  /**
  * A full or partial URL to a security policy to add to this instance. If this field is set to an empty string it will remove the associated security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#security_policy GoogleComputeInstanceFromMachineImage#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#stack_type GoogleComputeInstanceFromMachineImage#stack_type}
  */
  readonly stackType?: string;
  /**
  * The name or self_link of the subnetwork attached to this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#subnetwork GoogleComputeInstanceFromMachineImage#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The project in which the subnetwork belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_project GoogleComputeInstanceFromMachineImage#subnetwork_project}
  */
  readonly subnetworkProject?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#access_config GoogleComputeInstanceFromMachineImage#access_config}
  */
  readonly accessConfig?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig[] | cdktf.IResolvable;
  /**
  * alias_ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#alias_ip_range GoogleComputeInstanceFromMachineImage#alias_ip_range}
  */
  readonly aliasIpRange?: GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange[] | cdktf.IResolvable;
  /**
  * ipv6_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#ipv6_access_config GoogleComputeInstanceFromMachineImage#ipv6_access_config}
  */
  readonly ipv6AccessConfig?: GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable;
}

export function googleComputeInstanceFromMachineImageNetworkInterfaceToTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ipv6_prefix_length: cdktf.numberToTerraform(struct!.internalIpv6PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    network: cdktf.stringToTerraform(struct!.network),
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    network_ip: cdktf.stringToTerraform(struct!.networkIp),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    subnetwork_project: cdktf.stringToTerraform(struct!.subnetworkProject),
    access_config: cdktf.listMapper(googleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigToTerraform, true)(struct!.accessConfig),
    alias_ip_range: cdktf.listMapper(googleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeToTerraform, true)(struct!.aliasIpRange),
    ipv6_access_config: cdktf.listMapper(googleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigToTerraform, true)(struct!.ipv6AccessConfig),
  }
}


export function googleComputeInstanceFromMachineImageNetworkInterfaceToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.internalIpv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
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
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ip: {
      value: cdktf.stringToHclTerraform(struct!.networkIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktf.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_policy: {
      value: cdktf.stringToHclTerraform(struct!.securityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_project: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList",
    },
    alias_ip_range: {
      value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeToHclTerraform, true)(struct!.aliasIpRange),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList",
    },
    ipv6_access_config: {
      value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigToHclTerraform, true)(struct!.ipv6AccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpv6PrefixLength = this._internalIpv6PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._networkIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIp = this._networkIp;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._subnetworkProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkProject = this._subnetworkProject;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._aliasIpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasIpRange = this._aliasIpRange?.internalValue;
    }
    if (this._ipv6AccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AccessConfig = this._ipv6AccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._network = undefined;
      this._networkAttachment = undefined;
      this._networkIp = undefined;
      this._nicType = undefined;
      this._queueCount = undefined;
      this._securityPolicy = undefined;
      this._stackType = undefined;
      this._subnetwork = undefined;
      this._subnetworkProject = undefined;
      this._accessConfig.internalValue = undefined;
      this._aliasIpRange.internalValue = undefined;
      this._ipv6AccessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIpv6PrefixLength = value.internalIpv6PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._network = value.network;
      this._networkAttachment = value.networkAttachment;
      this._networkIp = value.networkIp;
      this._nicType = value.nicType;
      this._queueCount = value.queueCount;
      this._securityPolicy = value.securityPolicy;
      this._stackType = value.stackType;
      this._subnetwork = value.subnetwork;
      this._subnetworkProject = value.subnetworkProject;
      this._accessConfig.internalValue = value.accessConfig;
      this._aliasIpRange.internalValue = value.aliasIpRange;
      this._ipv6AccessConfig.internalValue = value.ipv6AccessConfig;
    }
  }

  // internal_ipv6_prefix_length - computed: true, optional: true, required: false
  private _internalIpv6PrefixLength?: number; 
  public get internalIpv6PrefixLength() {
    return this.getNumberAttribute('internal_ipv6_prefix_length');
  }
  public set internalIpv6PrefixLength(value: number) {
    this._internalIpv6PrefixLength = value;
  }
  public resetInternalIpv6PrefixLength() {
    this._internalIpv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpv6PrefixLengthInput() {
    return this._internalIpv6PrefixLength;
  }

  // ipv6_access_type - computed: true, optional: false, required: false
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: true, required: false
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

  // network_attachment - computed: true, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // network_ip - computed: true, optional: true, required: false
  private _networkIp?: string; 
  public get networkIp() {
    return this.getStringAttribute('network_ip');
  }
  public set networkIp(value: string) {
    this._networkIp = value;
  }
  public resetNetworkIp() {
    this._networkIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpInput() {
    return this._networkIp;
  }

  // nic_type - computed: true, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // queue_count - computed: true, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // stack_type - computed: true, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // subnetwork_project - computed: true, optional: true, required: false
  private _subnetworkProject?: string; 
  public get subnetworkProject() {
    return this.getStringAttribute('subnetwork_project');
  }
  public set subnetworkProject(value: string) {
    this._subnetworkProject = value;
  }
  public resetSubnetworkProject() {
    this._subnetworkProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkProjectInput() {
    return this._subnetworkProject;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig[] | cdktf.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // alias_ip_range - computed: false, optional: true, required: false
  private _aliasIpRange = new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList(this, "alias_ip_range", false);
  public get aliasIpRange() {
    return this._aliasIpRange;
  }
  public putAliasIpRange(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange[] | cdktf.IResolvable) {
    this._aliasIpRange.internalValue = value;
  }
  public resetAliasIpRange() {
    this._aliasIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIpRangeInput() {
    return this._aliasIpRange.internalValue;
  }

  // ipv6_access_config - computed: false, optional: true, required: false
  private _ipv6AccessConfig = new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList(this, "ipv6_access_config", false);
  public get ipv6AccessConfig() {
    return this._ipv6AccessConfig;
  }
  public putIpv6AccessConfig(value: GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig[] | cdktf.IResolvable) {
    this._ipv6AccessConfig.internalValue = value;
  }
  public resetIpv6AccessConfig() {
    this._ipv6AccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessConfigInput() {
    return this._ipv6AccessConfig.internalValue;
  }
}

export class GoogleComputeInstanceFromMachineImageNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference {
    return new GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig {
  /**
  * The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#total_egress_bandwidth_tier GoogleComputeInstanceFromMachineImage#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function googleComputeInstanceFromMachineImageNetworkPerformanceConfigToTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference | GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function googleComputeInstanceFromMachineImageNetworkPerformanceConfigToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference | GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface GoogleComputeInstanceFromMachineImageParams {
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#resource_manager_tags GoogleComputeInstanceFromMachineImage#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function googleComputeInstanceFromMachineImageParamsToTerraform(struct?: GoogleComputeInstanceFromMachineImageParamsOutputReference | GoogleComputeInstanceFromMachineImageParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function googleComputeInstanceFromMachineImageParamsToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageParamsOutputReference | GoogleComputeInstanceFromMachineImageParams): any {
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

export class GoogleComputeInstanceFromMachineImageParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: true, optional: true, required: false
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
export interface GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation {
  /**
  * Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}
  */
  readonly key: string;
  /**
  * Corresponds to the label values of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}
  */
  readonly values: string[];
}

export function googleComputeInstanceFromMachineImageReservationAffinitySpecificReservationToTerraform(struct?: GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference | GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleComputeInstanceFromMachineImageReservationAffinitySpecificReservationToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference | GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleComputeInstanceFromMachineImageReservationAffinity {
  /**
  * The type of reservation from which this instance can consume resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}
  */
  readonly type: string;
  /**
  * specific_reservation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#specific_reservation GoogleComputeInstanceFromMachineImage#specific_reservation}
  */
  readonly specificReservation?: GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation;
}

export function googleComputeInstanceFromMachineImageReservationAffinityToTerraform(struct?: GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference | GoogleComputeInstanceFromMachineImageReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    specific_reservation: googleComputeInstanceFromMachineImageReservationAffinitySpecificReservationToTerraform(struct!.specificReservation),
  }
}


export function googleComputeInstanceFromMachineImageReservationAffinityToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference | GoogleComputeInstanceFromMachineImageReservationAffinity): any {
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
    specific_reservation: {
      value: googleComputeInstanceFromMachineImageReservationAffinitySpecificReservationToHclTerraform(struct!.specificReservation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._specificReservation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificReservation = this._specificReservation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._specificReservation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._specificReservation.internalValue = value.specificReservation;
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

  // specific_reservation - computed: false, optional: true, required: false
  private _specificReservation = new GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference(this, "specific_reservation");
  public get specificReservation() {
    return this._specificReservation;
  }
  public putSpecificReservation(value: GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation) {
    this._specificReservation.internalValue = value;
  }
  public resetSpecificReservation() {
    this._specificReservation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation.internalValue;
  }
}
export interface GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}
  */
  readonly seconds: number;
}

export function googleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutToTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference | GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference | GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: true, optional: true, required: false
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}
  */
  readonly seconds: number;
}

export function googleComputeInstanceFromMachineImageSchedulingMaxRunDurationToTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference | GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeInstanceFromMachineImageSchedulingMaxRunDurationToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference | GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: true, optional: true, required: false
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#operator GoogleComputeInstanceFromMachineImage#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}
  */
  readonly values: string[];
}

export function googleComputeInstanceFromMachineImageSchedulingNodeAffinitiesToTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleComputeInstanceFromMachineImageSchedulingNodeAffinitiesToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference {
    return new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction {
  /**
  * If true, the contents of any attached Local SSD disks will be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#discard_local_ssd GoogleComputeInstanceFromMachineImage#discard_local_ssd}
  */
  readonly discardLocalSsd?: boolean | cdktf.IResolvable;
}

export function googleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionToTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference | GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard_local_ssd: cdktf.booleanToTerraform(struct!.discardLocalSsd),
  }
}


export function googleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference | GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard_local_ssd: {
      value: cdktf.booleanToHclTerraform(struct!.discardLocalSsd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discardLocalSsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardLocalSsd = this._discardLocalSsd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._discardLocalSsd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._discardLocalSsd = value.discardLocalSsd;
    }
  }

  // discard_local_ssd - computed: true, optional: true, required: false
  private _discardLocalSsd?: boolean | cdktf.IResolvable; 
  public get discardLocalSsd() {
    return this.getBooleanAttribute('discard_local_ssd');
  }
  public set discardLocalSsd(value: boolean | cdktf.IResolvable) {
    this._discardLocalSsd = value;
  }
  public resetDiscardLocalSsd() {
    this._discardLocalSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardLocalSsdInput() {
    return this._discardLocalSsd;
  }
}
export interface GoogleComputeInstanceFromMachineImageScheduling {
  /**
  * Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#automatic_restart GoogleComputeInstanceFromMachineImage#automatic_restart}
  */
  readonly automaticRestart?: boolean | cdktf.IResolvable;
  /**
  * Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#host_error_timeout_seconds GoogleComputeInstanceFromMachineImage#host_error_timeout_seconds}
  */
  readonly hostErrorTimeoutSeconds?: number;
  /**
  * Specifies the action GCE should take when SPOT VM is preempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#instance_termination_action GoogleComputeInstanceFromMachineImage#instance_termination_action}
  */
  readonly instanceTerminationAction?: string;
  /**
  * Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#maintenance_interval GoogleComputeInstanceFromMachineImage#maintenance_interval}
  */
  readonly maintenanceInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#min_node_cpus GoogleComputeInstanceFromMachineImage#min_node_cpus}
  */
  readonly minNodeCpus?: number;
  /**
  * Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#on_host_maintenance GoogleComputeInstanceFromMachineImage#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Whether the instance is preemptible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#preemptible GoogleComputeInstanceFromMachineImage#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance is spot. If this is set as SPOT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#provisioning_model GoogleComputeInstanceFromMachineImage#provisioning_model}
  */
  readonly provisioningModel?: string;
  /**
  * local_ssd_recovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#local_ssd_recovery_timeout GoogleComputeInstanceFromMachineImage#local_ssd_recovery_timeout}
  */
  readonly localSsdRecoveryTimeout?: GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout;
  /**
  * max_run_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#max_run_duration GoogleComputeInstanceFromMachineImage#max_run_duration}
  */
  readonly maxRunDuration?: GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration;
  /**
  * node_affinities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#node_affinities GoogleComputeInstanceFromMachineImage#node_affinities}
  */
  readonly nodeAffinities?: GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities[] | cdktf.IResolvable;
  /**
  * on_instance_stop_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#on_instance_stop_action GoogleComputeInstanceFromMachineImage#on_instance_stop_action}
  */
  readonly onInstanceStopAction?: GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction;
}

export function googleComputeInstanceFromMachineImageSchedulingToTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingOutputReference | GoogleComputeInstanceFromMachineImageScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_restart: cdktf.booleanToTerraform(struct!.automaticRestart),
    host_error_timeout_seconds: cdktf.numberToTerraform(struct!.hostErrorTimeoutSeconds),
    instance_termination_action: cdktf.stringToTerraform(struct!.instanceTerminationAction),
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
    min_node_cpus: cdktf.numberToTerraform(struct!.minNodeCpus),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    provisioning_model: cdktf.stringToTerraform(struct!.provisioningModel),
    local_ssd_recovery_timeout: googleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutToTerraform(struct!.localSsdRecoveryTimeout),
    max_run_duration: googleComputeInstanceFromMachineImageSchedulingMaxRunDurationToTerraform(struct!.maxRunDuration),
    node_affinities: cdktf.listMapper(googleComputeInstanceFromMachineImageSchedulingNodeAffinitiesToTerraform, true)(struct!.nodeAffinities),
    on_instance_stop_action: googleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionToTerraform(struct!.onInstanceStopAction),
  }
}


export function googleComputeInstanceFromMachineImageSchedulingToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageSchedulingOutputReference | GoogleComputeInstanceFromMachineImageScheduling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_restart: {
      value: cdktf.booleanToHclTerraform(struct!.automaticRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_error_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.hostErrorTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_termination_action: {
      value: cdktf.stringToHclTerraform(struct!.instanceTerminationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_node_cpus: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_host_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioning_model: {
      value: cdktf.stringToHclTerraform(struct!.provisioningModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_recovery_timeout: {
      value: googleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutToHclTerraform(struct!.localSsdRecoveryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutList",
    },
    max_run_duration: {
      value: googleComputeInstanceFromMachineImageSchedulingMaxRunDurationToHclTerraform(struct!.maxRunDuration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationList",
    },
    node_affinities: {
      value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageSchedulingNodeAffinitiesToHclTerraform, true)(struct!.nodeAffinities),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList",
    },
    on_instance_stop_action: {
      value: googleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionToHclTerraform(struct!.onInstanceStopAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageSchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticRestart = this._automaticRestart;
    }
    if (this._hostErrorTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostErrorTimeoutSeconds = this._hostErrorTimeoutSeconds;
    }
    if (this._instanceTerminationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTerminationAction = this._instanceTerminationAction;
    }
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    if (this._minNodeCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCpus = this._minNodeCpus;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._provisioningModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioningModel = this._provisioningModel;
    }
    if (this._localSsdRecoveryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdRecoveryTimeout = this._localSsdRecoveryTimeout?.internalValue;
    }
    if (this._maxRunDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration?.internalValue;
    }
    if (this._nodeAffinities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinities = this._nodeAffinities?.internalValue;
    }
    if (this._onInstanceStopAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onInstanceStopAction = this._onInstanceStopAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticRestart = undefined;
      this._hostErrorTimeoutSeconds = undefined;
      this._instanceTerminationAction = undefined;
      this._maintenanceInterval = undefined;
      this._minNodeCpus = undefined;
      this._onHostMaintenance = undefined;
      this._preemptible = undefined;
      this._provisioningModel = undefined;
      this._localSsdRecoveryTimeout.internalValue = undefined;
      this._maxRunDuration.internalValue = undefined;
      this._nodeAffinities.internalValue = undefined;
      this._onInstanceStopAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticRestart = value.automaticRestart;
      this._hostErrorTimeoutSeconds = value.hostErrorTimeoutSeconds;
      this._instanceTerminationAction = value.instanceTerminationAction;
      this._maintenanceInterval = value.maintenanceInterval;
      this._minNodeCpus = value.minNodeCpus;
      this._onHostMaintenance = value.onHostMaintenance;
      this._preemptible = value.preemptible;
      this._provisioningModel = value.provisioningModel;
      this._localSsdRecoveryTimeout.internalValue = value.localSsdRecoveryTimeout;
      this._maxRunDuration.internalValue = value.maxRunDuration;
      this._nodeAffinities.internalValue = value.nodeAffinities;
      this._onInstanceStopAction.internalValue = value.onInstanceStopAction;
    }
  }

  // automatic_restart - computed: true, optional: true, required: false
  private _automaticRestart?: boolean | cdktf.IResolvable; 
  public get automaticRestart() {
    return this.getBooleanAttribute('automatic_restart');
  }
  public set automaticRestart(value: boolean | cdktf.IResolvable) {
    this._automaticRestart = value;
  }
  public resetAutomaticRestart() {
    this._automaticRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRestartInput() {
    return this._automaticRestart;
  }

  // host_error_timeout_seconds - computed: true, optional: true, required: false
  private _hostErrorTimeoutSeconds?: number; 
  public get hostErrorTimeoutSeconds() {
    return this.getNumberAttribute('host_error_timeout_seconds');
  }
  public set hostErrorTimeoutSeconds(value: number) {
    this._hostErrorTimeoutSeconds = value;
  }
  public resetHostErrorTimeoutSeconds() {
    this._hostErrorTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostErrorTimeoutSecondsInput() {
    return this._hostErrorTimeoutSeconds;
  }

  // instance_termination_action - computed: true, optional: true, required: false
  private _instanceTerminationAction?: string; 
  public get instanceTerminationAction() {
    return this.getStringAttribute('instance_termination_action');
  }
  public set instanceTerminationAction(value: string) {
    this._instanceTerminationAction = value;
  }
  public resetInstanceTerminationAction() {
    this._instanceTerminationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTerminationActionInput() {
    return this._instanceTerminationAction;
  }

  // maintenance_interval - computed: true, optional: true, required: false
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  public resetMaintenanceInterval() {
    this._maintenanceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }

  // min_node_cpus - computed: true, optional: true, required: false
  private _minNodeCpus?: number; 
  public get minNodeCpus() {
    return this.getNumberAttribute('min_node_cpus');
  }
  public set minNodeCpus(value: number) {
    this._minNodeCpus = value;
  }
  public resetMinNodeCpus() {
    this._minNodeCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCpusInput() {
    return this._minNodeCpus;
  }

  // on_host_maintenance - computed: true, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // preemptible - computed: true, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // provisioning_model - computed: true, optional: true, required: false
  private _provisioningModel?: string; 
  public get provisioningModel() {
    return this.getStringAttribute('provisioning_model');
  }
  public set provisioningModel(value: string) {
    this._provisioningModel = value;
  }
  public resetProvisioningModel() {
    this._provisioningModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningModelInput() {
    return this._provisioningModel;
  }

  // local_ssd_recovery_timeout - computed: false, optional: true, required: false
  private _localSsdRecoveryTimeout = new GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference(this, "local_ssd_recovery_timeout");
  public get localSsdRecoveryTimeout() {
    return this._localSsdRecoveryTimeout;
  }
  public putLocalSsdRecoveryTimeout(value: GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout) {
    this._localSsdRecoveryTimeout.internalValue = value;
  }
  public resetLocalSsdRecoveryTimeout() {
    this._localSsdRecoveryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdRecoveryTimeoutInput() {
    return this._localSsdRecoveryTimeout.internalValue;
  }

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration = new GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference(this, "max_run_duration");
  public get maxRunDuration() {
    return this._maxRunDuration;
  }
  public putMaxRunDuration(value: GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration) {
    this._maxRunDuration.internalValue = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration.internalValue;
  }

  // node_affinities - computed: false, optional: true, required: false
  private _nodeAffinities = new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList(this, "node_affinities", true);
  public get nodeAffinities() {
    return this._nodeAffinities;
  }
  public putNodeAffinities(value: GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities[] | cdktf.IResolvable) {
    this._nodeAffinities.internalValue = value;
  }
  public resetNodeAffinities() {
    this._nodeAffinities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinitiesInput() {
    return this._nodeAffinities.internalValue;
  }

  // on_instance_stop_action - computed: false, optional: true, required: false
  private _onInstanceStopAction = new GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference(this, "on_instance_stop_action");
  public get onInstanceStopAction() {
    return this._onInstanceStopAction;
  }
  public putOnInstanceStopAction(value: GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction) {
    this._onInstanceStopAction.internalValue = value;
  }
  public resetOnInstanceStopAction() {
    this._onInstanceStopAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInstanceStopActionInput() {
    return this._onInstanceStopAction.internalValue;
  }
}
export interface GoogleComputeInstanceFromMachineImageServiceAccount {
  /**
  * The service account e-mail address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#email GoogleComputeInstanceFromMachineImage#email}
  */
  readonly email?: string;
  /**
  * A list of service scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#scopes GoogleComputeInstanceFromMachineImage#scopes}
  */
  readonly scopes: string[];
}

export function googleComputeInstanceFromMachineImageServiceAccountToTerraform(struct?: GoogleComputeInstanceFromMachineImageServiceAccountOutputReference | GoogleComputeInstanceFromMachineImageServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function googleComputeInstanceFromMachineImageServiceAccountToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageServiceAccountOutputReference | GoogleComputeInstanceFromMachineImageServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._scopes = value.scopes;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface GoogleComputeInstanceFromMachineImageShieldedInstanceConfig {
  /**
  * Whether integrity monitoring is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_integrity_monitoring GoogleComputeInstanceFromMachineImage#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether secure boot is enabled for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_secure_boot GoogleComputeInstanceFromMachineImage#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance uses vTPM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#enable_vtpm GoogleComputeInstanceFromMachineImage#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleComputeInstanceFromMachineImageShieldedInstanceConfigToTerraform(struct?: GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference | GoogleComputeInstanceFromMachineImageShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}


export function googleComputeInstanceFromMachineImageShieldedInstanceConfigToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference | GoogleComputeInstanceFromMachineImageShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeInstanceFromMachineImageShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: true, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: true, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: true, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface GoogleComputeInstanceFromMachineImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#create GoogleComputeInstanceFromMachineImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#delete GoogleComputeInstanceFromMachineImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#update GoogleComputeInstanceFromMachineImage#update}
  */
  readonly update?: string;
}

export function googleComputeInstanceFromMachineImageTimeoutsToTerraform(struct?: GoogleComputeInstanceFromMachineImageTimeouts | cdktf.IResolvable): any {
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


export function googleComputeInstanceFromMachineImageTimeoutsToHclTerraform(struct?: GoogleComputeInstanceFromMachineImageTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeInstanceFromMachineImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeInstanceFromMachineImageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeInstanceFromMachineImageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image google_compute_instance_from_machine_image}
*/
export class GoogleComputeInstanceFromMachineImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_instance_from_machine_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeInstanceFromMachineImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeInstanceFromMachineImage to import
  * @param importFromId The id of the existing GoogleComputeInstanceFromMachineImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeInstanceFromMachineImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_instance_from_machine_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_compute_instance_from_machine_image google_compute_instance_from_machine_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeInstanceFromMachineImageConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeInstanceFromMachineImageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_from_machine_image',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.12.0',
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
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._canIpForward = config.canIpForward;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._desiredStatus = config.desiredStatus;
    this._enableDisplay = config.enableDisplay;
    this._hostname = config.hostname;
    this._id = config.id;
    this._keyRevocationActionType = config.keyRevocationActionType;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._metadata = config.metadata;
    this._metadataStartupScript = config.metadataStartupScript;
    this._minCpuPlatform = config.minCpuPlatform;
    this._name = config.name;
    this._partnerMetadata = config.partnerMetadata;
    this._project = config.project;
    this._resourcePolicies = config.resourcePolicies;
    this._sourceMachineImage = config.sourceMachineImage;
    this._tags = config.tags;
    this._zone = config.zone;
    this._advancedMachineFeatures.internalValue = config.advancedMachineFeatures;
    this._confidentialInstanceConfig.internalValue = config.confidentialInstanceConfig;
    this._guestAccelerator.internalValue = config.guestAccelerator;
    this._networkInterface.internalValue = config.networkInterface;
    this._networkPerformanceConfig.internalValue = config.networkPerformanceConfig;
    this._params.internalValue = config.params;
    this._reservationAffinity.internalValue = config.reservationAffinity;
    this._scheduling.internalValue = config.scheduling;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: true, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
  }

  // attached_disk - computed: true, optional: false, required: false
  private _attachedDisk = new GoogleComputeInstanceFromMachineImageAttachedDiskList(this, "attached_disk", false);
  public get attachedDisk() {
    return this._attachedDisk;
  }

  // boot_disk - computed: true, optional: false, required: false
  private _bootDisk = new GoogleComputeInstanceFromMachineImageBootDiskList(this, "boot_disk", false);
  public get bootDisk() {
    return this._bootDisk;
  }

  // can_ip_forward - computed: true, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktf.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // cpu_platform - computed: true, optional: false, required: false
  public get cpuPlatform() {
    return this.getStringAttribute('cpu_platform');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // deletion_protection - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // desired_status - computed: true, optional: true, required: false
  private _desiredStatus?: string; 
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_display - computed: true, optional: true, required: false
  private _enableDisplay?: boolean | cdktf.IResolvable; 
  public get enableDisplay() {
    return this.getBooleanAttribute('enable_display');
  }
  public set enableDisplay(value: boolean | cdktf.IResolvable) {
    this._enableDisplay = value;
  }
  public resetEnableDisplay() {
    this._enableDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisplayInput() {
    return this._enableDisplay;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // key_revocation_action_type - computed: true, optional: true, required: false
  private _keyRevocationActionType?: string; 
  public get keyRevocationActionType() {
    return this.getStringAttribute('key_revocation_action_type');
  }
  public set keyRevocationActionType(value: string) {
    this._keyRevocationActionType = value;
  }
  public resetKeyRevocationActionType() {
    this._keyRevocationActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRevocationActionTypeInput() {
    return this._keyRevocationActionType;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: true, required: false
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

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_fingerprint - computed: true, optional: false, required: false
  public get metadataFingerprint() {
    return this.getStringAttribute('metadata_fingerprint');
  }

  // metadata_startup_script - computed: true, optional: true, required: false
  private _metadataStartupScript?: string; 
  public get metadataStartupScript() {
    return this.getStringAttribute('metadata_startup_script');
  }
  public set metadataStartupScript(value: string) {
    this._metadataStartupScript = value;
  }
  public resetMetadataStartupScript() {
    this._metadataStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataStartupScriptInput() {
    return this._metadataStartupScript;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
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

  // partner_metadata - computed: true, optional: true, required: false
  private _partnerMetadata?: { [key: string]: string }; 
  public get partnerMetadata() {
    return this.getStringMapAttribute('partner_metadata');
  }
  public set partnerMetadata(value: { [key: string]: string }) {
    this._partnerMetadata = value;
  }
  public resetPartnerMetadata() {
    this._partnerMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerMetadataInput() {
    return this._partnerMetadata;
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

  // scratch_disk - computed: true, optional: false, required: false
  private _scratchDisk = new GoogleComputeInstanceFromMachineImageScratchDiskList(this, "scratch_disk", false);
  public get scratchDisk() {
    return this._scratchDisk;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // source_machine_image - computed: false, optional: false, required: true
  private _sourceMachineImage?: string; 
  public get sourceMachineImage() {
    return this.getStringAttribute('source_machine_image');
  }
  public set sourceMachineImage(value: string) {
    this._sourceMachineImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMachineImageInput() {
    return this._sourceMachineImage;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_fingerprint - computed: true, optional: false, required: false
  public get tagsFingerprint() {
    return this.getStringAttribute('tags_fingerprint');
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

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new GoogleComputeInstanceFromMachineImageGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleComputeInstanceFromMachineImageGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new GoogleComputeInstanceFromMachineImageNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: GoogleComputeInstanceFromMachineImageNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new GoogleComputeInstanceFromMachineImageParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: GoogleComputeInstanceFromMachineImageParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleComputeInstanceFromMachineImageReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new GoogleComputeInstanceFromMachineImageSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: GoogleComputeInstanceFromMachineImageScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new GoogleComputeInstanceFromMachineImageServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: GoogleComputeInstanceFromMachineImageServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleComputeInstanceFromMachineImageShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeInstanceFromMachineImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeInstanceFromMachineImageTimeouts) {
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
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      can_ip_forward: cdktf.booleanToTerraform(this._canIpForward),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      enable_display: cdktf.booleanToTerraform(this._enableDisplay),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      key_revocation_action_type: cdktf.stringToTerraform(this._keyRevocationActionType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      metadata_startup_script: cdktf.stringToTerraform(this._metadataStartupScript),
      min_cpu_platform: cdktf.stringToTerraform(this._minCpuPlatform),
      name: cdktf.stringToTerraform(this._name),
      partner_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._partnerMetadata),
      project: cdktf.stringToTerraform(this._project),
      resource_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePolicies),
      source_machine_image: cdktf.stringToTerraform(this._sourceMachineImage),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      advanced_machine_features: googleComputeInstanceFromMachineImageAdvancedMachineFeaturesToTerraform(this._advancedMachineFeatures.internalValue),
      confidential_instance_config: googleComputeInstanceFromMachineImageConfidentialInstanceConfigToTerraform(this._confidentialInstanceConfig.internalValue),
      guest_accelerator: cdktf.listMapper(googleComputeInstanceFromMachineImageGuestAcceleratorToTerraform, true)(this._guestAccelerator.internalValue),
      network_interface: cdktf.listMapper(googleComputeInstanceFromMachineImageNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      network_performance_config: googleComputeInstanceFromMachineImageNetworkPerformanceConfigToTerraform(this._networkPerformanceConfig.internalValue),
      params: googleComputeInstanceFromMachineImageParamsToTerraform(this._params.internalValue),
      reservation_affinity: googleComputeInstanceFromMachineImageReservationAffinityToTerraform(this._reservationAffinity.internalValue),
      scheduling: googleComputeInstanceFromMachineImageSchedulingToTerraform(this._scheduling.internalValue),
      service_account: googleComputeInstanceFromMachineImageServiceAccountToTerraform(this._serviceAccount.internalValue),
      shielded_instance_config: googleComputeInstanceFromMachineImageShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      timeouts: googleComputeInstanceFromMachineImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_stopping_for_update: {
        value: cdktf.booleanToHclTerraform(this._allowStoppingForUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_ip_forward: {
        value: cdktf.booleanToHclTerraform(this._canIpForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      desired_status: {
        value: cdktf.stringToHclTerraform(this._desiredStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_display: {
        value: cdktf.booleanToHclTerraform(this._enableDisplay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      key_revocation_action_type: {
        value: cdktf.stringToHclTerraform(this._keyRevocationActionType),
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
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata_startup_script: {
        value: cdktf.stringToHclTerraform(this._metadataStartupScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_cpu_platform: {
        value: cdktf.stringToHclTerraform(this._minCpuPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._partnerMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcePolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_machine_image: {
        value: cdktf.stringToHclTerraform(this._sourceMachineImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_machine_features: {
        value: googleComputeInstanceFromMachineImageAdvancedMachineFeaturesToHclTerraform(this._advancedMachineFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesList",
      },
      confidential_instance_config: {
        value: googleComputeInstanceFromMachineImageConfidentialInstanceConfigToHclTerraform(this._confidentialInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigList",
      },
      guest_accelerator: {
        value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageGuestAcceleratorToHclTerraform, true)(this._guestAccelerator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageGuestAcceleratorList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(googleComputeInstanceFromMachineImageNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageNetworkInterfaceList",
      },
      network_performance_config: {
        value: googleComputeInstanceFromMachineImageNetworkPerformanceConfigToHclTerraform(this._networkPerformanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigList",
      },
      params: {
        value: googleComputeInstanceFromMachineImageParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageParamsList",
      },
      reservation_affinity: {
        value: googleComputeInstanceFromMachineImageReservationAffinityToHclTerraform(this._reservationAffinity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageReservationAffinityList",
      },
      scheduling: {
        value: googleComputeInstanceFromMachineImageSchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageSchedulingList",
      },
      service_account: {
        value: googleComputeInstanceFromMachineImageServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageServiceAccountList",
      },
      shielded_instance_config: {
        value: googleComputeInstanceFromMachineImageShieldedInstanceConfigToHclTerraform(this._shieldedInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeInstanceFromMachineImageShieldedInstanceConfigList",
      },
      timeouts: {
        value: googleComputeInstanceFromMachineImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeInstanceFromMachineImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
