// https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#base_instance_name GoogleComputeRegionInstanceGroupManager#base_instance_name}
  */
  readonly baseInstanceName: string;
  /**
  * An optional textual description of the instance group manager.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#description GoogleComputeRegionInstanceGroupManager#description}
  */
  readonly description?: string;
  /**
  * The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#distribution_policy_target_shape GoogleComputeRegionInstanceGroupManager#distribution_policy_target_shape}
  */
  readonly distributionPolicyTargetShape?: string;
  /**
  * The distribution policy for this managed instance group. You can specify one or more values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#distribution_policy_zones GoogleComputeRegionInstanceGroupManager#distribution_policy_zones}
  */
  readonly distributionPolicyZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#id GoogleComputeRegionInstanceGroupManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#project GoogleComputeRegionInstanceGroupManager#project}
  */
  readonly project?: string;
  /**
  * The region where the managed instance group resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#region GoogleComputeRegionInstanceGroupManager#region}
  */
  readonly region?: string;
  /**
  * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_pools GoogleComputeRegionInstanceGroupManager#target_pools}
  */
  readonly targetPools?: string[];
  /**
  * The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}
  */
  readonly targetSize?: number;
  /**
  * Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#wait_for_instances GoogleComputeRegionInstanceGroupManager#wait_for_instances}
  */
  readonly waitForInstances?: boolean | cdktf.IResolvable;
  /**
  * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#wait_for_instances_status GoogleComputeRegionInstanceGroupManager#wait_for_instances_status}
  */
  readonly waitForInstancesStatus?: string;
  /**
  * all_instances_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#all_instances_config GoogleComputeRegionInstanceGroupManager#all_instances_config}
  */
  readonly allInstancesConfig?: GoogleComputeRegionInstanceGroupManagerAllInstancesConfig;
  /**
  * auto_healing_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#auto_healing_policies GoogleComputeRegionInstanceGroupManager#auto_healing_policies}
  */
  readonly autoHealingPolicies?: GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies;
  /**
  * named_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#named_port GoogleComputeRegionInstanceGroupManager#named_port}
  */
  readonly namedPort?: GoogleComputeRegionInstanceGroupManagerNamedPort[] | cdktf.IResolvable;
  /**
  * stateful_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#stateful_disk GoogleComputeRegionInstanceGroupManager#stateful_disk}
  */
  readonly statefulDisk?: GoogleComputeRegionInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#timeouts GoogleComputeRegionInstanceGroupManager#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionInstanceGroupManagerTimeouts;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#update_policy GoogleComputeRegionInstanceGroupManager#update_policy}
  */
  readonly updatePolicy?: GoogleComputeRegionInstanceGroupManagerUpdatePolicy;
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#version GoogleComputeRegionInstanceGroupManager#version}
  */
  readonly version: GoogleComputeRegionInstanceGroupManagerVersion[] | cdktf.IResolvable;
}
export interface GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig {
}

export function googleComputeRegionInstanceGroupManagerStatusAllInstancesConfigToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs {
}

export function googleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_effective - computed: true, optional: false, required: false
  public get allEffective() {
    return this.getBooleanAttribute('all_effective');
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerStatusStateful {
}

export function googleComputeRegionInstanceGroupManagerStatusStatefulToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatusStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatusStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_stateful_config - computed: true, optional: false, required: false
  public get hasStatefulConfig() {
    return this.getBooleanAttribute('has_stateful_config');
  }

  // per_instance_configs - computed: true, optional: false, required: false
  private _perInstanceConfigs = new GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(this, "per_instance_configs", false);
  public get perInstanceConfigs() {
    return this._perInstanceConfigs;
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusStatefulList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerStatusVersionTarget {
}

export function googleComputeRegionInstanceGroupManagerStatusVersionTargetToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatusVersionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatusVersionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_reached - computed: true, optional: false, required: false
  public get isReached() {
    return this.getBooleanAttribute('is_reached');
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerStatus {
}

export function googleComputeRegionInstanceGroupManagerStatusToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // is_stable - computed: true, optional: false, required: false
  public get isStable() {
    return this.getBooleanAttribute('is_stable');
  }

  // stateful - computed: true, optional: false, required: false
  private _stateful = new GoogleComputeRegionInstanceGroupManagerStatusStatefulList(this, "stateful", false);
  public get stateful() {
    return this._stateful;
  }

  // version_target - computed: true, optional: false, required: false
  private _versionTarget = new GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(this, "version_target", false);
  public get versionTarget() {
    return this._versionTarget;
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatusOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerAllInstancesConfig {
  /**
  * The label key-value pairs that you want to patch onto the instance,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#labels GoogleComputeRegionInstanceGroupManager#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#metadata GoogleComputeRegionInstanceGroupManager#metadata}
  */
  readonly metadata?: { [key: string]: string };
}

export function googleComputeRegionInstanceGroupManagerAllInstancesConfigToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference | GoogleComputeRegionInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
  }
}

export class GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._metadata = value.metadata;
    }
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

  // metadata - computed: false, optional: true, required: false
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
}
export interface GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies {
  /**
  * The health check resource that signals autohealing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#health_check GoogleComputeRegionInstanceGroupManager#health_check}
  */
  readonly healthCheck: string;
  /**
  * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#initial_delay_sec GoogleComputeRegionInstanceGroupManager#initial_delay_sec}
  */
  readonly initialDelaySec: number;
}

export function googleComputeRegionInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference | GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    initial_delay_sec: cdktf.numberToTerraform(struct!.initialDelaySec),
  }
}

export class GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._initialDelaySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySec = this._initialDelaySec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheck = undefined;
      this._initialDelaySec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheck = value.healthCheck;
      this._initialDelaySec = value.initialDelaySec;
    }
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // initial_delay_sec - computed: false, optional: false, required: true
  private _initialDelaySec?: number; 
  public get initialDelaySec() {
    return this.getNumberAttribute('initial_delay_sec');
  }
  public set initialDelaySec(value: number) {
    this._initialDelaySec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecInput() {
    return this._initialDelaySec;
  }
}
export interface GoogleComputeRegionInstanceGroupManagerNamedPort {
  /**
  * The name of the port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#port GoogleComputeRegionInstanceGroupManager#port}
  */
  readonly port: number;
}

export function googleComputeRegionInstanceGroupManagerNamedPortToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerNamedPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerNamedPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerNamedPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GoogleComputeRegionInstanceGroupManagerNamedPortList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionInstanceGroupManagerNamedPort[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerStatefulDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted. The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * The device name of the disk to be attached.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#device_name GoogleComputeRegionInstanceGroupManager#device_name}
  */
  readonly deviceName: string;
}

export function googleComputeRegionInstanceGroupManagerStatefulDiskToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerStatefulDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerStatefulDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteRule = this._deleteRule;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerStatefulDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteRule = undefined;
      this._deviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteRule = value.deleteRule;
      this._deviceName = value.deviceName;
    }
  }

  // delete_rule - computed: false, optional: true, required: false
  private _deleteRule?: string; 
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }
  public set deleteRule(value: string) {
    this._deleteRule = value;
  }
  public resetDeleteRule() {
    this._deleteRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRuleInput() {
    return this._deleteRule;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }
}

export class GoogleComputeRegionInstanceGroupManagerStatefulDiskList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionInstanceGroupManagerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#create GoogleComputeRegionInstanceGroupManager#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#delete GoogleComputeRegionInstanceGroupManager#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#update GoogleComputeRegionInstanceGroupManager#update}
  */
  readonly update?: string;
}

export function googleComputeRegionInstanceGroupManagerTimeoutsToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference | GoogleComputeRegionInstanceGroupManagerTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleComputeRegionInstanceGroupManagerUpdatePolicy {
  /**
  * The instance redistribution policy for regional managed instance groups. Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#instance_redistribution_type GoogleComputeRegionInstanceGroupManager#instance_redistribution_type}
  */
  readonly instanceRedistributionType?: string;
  /**
  * The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_surge_fixed GoogleComputeRegionInstanceGroupManager#max_surge_fixed}
  */
  readonly maxSurgeFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_surge_percent GoogleComputeRegionInstanceGroupManager#max_surge_percent}
  */
  readonly maxSurgePercent?: number;
  /**
  * The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_unavailable_fixed GoogleComputeRegionInstanceGroupManager#max_unavailable_fixed}
  */
  readonly maxUnavailableFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#max_unavailable_percent GoogleComputeRegionInstanceGroupManager#max_unavailable_percent}
  */
  readonly maxUnavailablePercent?: number;
  /**
  * Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#min_ready_sec GoogleComputeRegionInstanceGroupManager#min_ready_sec}
  */
  readonly minReadySec?: number;
  /**
  * Minimal action to be taken on an instance. You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#minimal_action GoogleComputeRegionInstanceGroupManager#minimal_action}
  */
  readonly minimalAction: string;
  /**
  * Most disruptive action that is allowed to be taken on an instance. You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#most_disruptive_allowed_action GoogleComputeRegionInstanceGroupManager#most_disruptive_allowed_action}
  */
  readonly mostDisruptiveAllowedAction?: string;
  /**
  * The instance replacement method for regional managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#replacement_method GoogleComputeRegionInstanceGroupManager#replacement_method}
  */
  readonly replacementMethod?: string;
  /**
  * The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#type GoogleComputeRegionInstanceGroupManager#type}
  */
  readonly type: string;
}

export function googleComputeRegionInstanceGroupManagerUpdatePolicyToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference | GoogleComputeRegionInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_redistribution_type: cdktf.stringToTerraform(struct!.instanceRedistributionType),
    max_surge_fixed: cdktf.numberToTerraform(struct!.maxSurgeFixed),
    max_surge_percent: cdktf.numberToTerraform(struct!.maxSurgePercent),
    max_unavailable_fixed: cdktf.numberToTerraform(struct!.maxUnavailableFixed),
    max_unavailable_percent: cdktf.numberToTerraform(struct!.maxUnavailablePercent),
    min_ready_sec: cdktf.numberToTerraform(struct!.minReadySec),
    minimal_action: cdktf.stringToTerraform(struct!.minimalAction),
    most_disruptive_allowed_action: cdktf.stringToTerraform(struct!.mostDisruptiveAllowedAction),
    replacement_method: cdktf.stringToTerraform(struct!.replacementMethod),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceRedistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRedistributionType = this._instanceRedistributionType;
    }
    if (this._maxSurgeFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgeFixed = this._maxSurgeFixed;
    }
    if (this._maxSurgePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgePercent = this._maxSurgePercent;
    }
    if (this._maxUnavailableFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableFixed = this._maxUnavailableFixed;
    }
    if (this._maxUnavailablePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercent = this._maxUnavailablePercent;
    }
    if (this._minReadySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySec = this._minReadySec;
    }
    if (this._minimalAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalAction = this._minimalAction;
    }
    if (this._mostDisruptiveAllowedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostDisruptiveAllowedAction = this._mostDisruptiveAllowedAction;
    }
    if (this._replacementMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementMethod = this._replacementMethod;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceRedistributionType = undefined;
      this._maxSurgeFixed = undefined;
      this._maxSurgePercent = undefined;
      this._maxUnavailableFixed = undefined;
      this._maxUnavailablePercent = undefined;
      this._minReadySec = undefined;
      this._minimalAction = undefined;
      this._mostDisruptiveAllowedAction = undefined;
      this._replacementMethod = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceRedistributionType = value.instanceRedistributionType;
      this._maxSurgeFixed = value.maxSurgeFixed;
      this._maxSurgePercent = value.maxSurgePercent;
      this._maxUnavailableFixed = value.maxUnavailableFixed;
      this._maxUnavailablePercent = value.maxUnavailablePercent;
      this._minReadySec = value.minReadySec;
      this._minimalAction = value.minimalAction;
      this._mostDisruptiveAllowedAction = value.mostDisruptiveAllowedAction;
      this._replacementMethod = value.replacementMethod;
      this._type = value.type;
    }
  }

  // instance_redistribution_type - computed: false, optional: true, required: false
  private _instanceRedistributionType?: string; 
  public get instanceRedistributionType() {
    return this.getStringAttribute('instance_redistribution_type');
  }
  public set instanceRedistributionType(value: string) {
    this._instanceRedistributionType = value;
  }
  public resetInstanceRedistributionType() {
    this._instanceRedistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRedistributionTypeInput() {
    return this._instanceRedistributionType;
  }

  // max_surge_fixed - computed: true, optional: true, required: false
  private _maxSurgeFixed?: number; 
  public get maxSurgeFixed() {
    return this.getNumberAttribute('max_surge_fixed');
  }
  public set maxSurgeFixed(value: number) {
    this._maxSurgeFixed = value;
  }
  public resetMaxSurgeFixed() {
    this._maxSurgeFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeFixedInput() {
    return this._maxSurgeFixed;
  }

  // max_surge_percent - computed: false, optional: true, required: false
  private _maxSurgePercent?: number; 
  public get maxSurgePercent() {
    return this.getNumberAttribute('max_surge_percent');
  }
  public set maxSurgePercent(value: number) {
    this._maxSurgePercent = value;
  }
  public resetMaxSurgePercent() {
    this._maxSurgePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgePercentInput() {
    return this._maxSurgePercent;
  }

  // max_unavailable_fixed - computed: true, optional: true, required: false
  private _maxUnavailableFixed?: number; 
  public get maxUnavailableFixed() {
    return this.getNumberAttribute('max_unavailable_fixed');
  }
  public set maxUnavailableFixed(value: number) {
    this._maxUnavailableFixed = value;
  }
  public resetMaxUnavailableFixed() {
    this._maxUnavailableFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableFixedInput() {
    return this._maxUnavailableFixed;
  }

  // max_unavailable_percent - computed: false, optional: true, required: false
  private _maxUnavailablePercent?: number; 
  public get maxUnavailablePercent() {
    return this.getNumberAttribute('max_unavailable_percent');
  }
  public set maxUnavailablePercent(value: number) {
    this._maxUnavailablePercent = value;
  }
  public resetMaxUnavailablePercent() {
    this._maxUnavailablePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentInput() {
    return this._maxUnavailablePercent;
  }

  // min_ready_sec - computed: false, optional: true, required: false
  private _minReadySec?: number; 
  public get minReadySec() {
    return this.getNumberAttribute('min_ready_sec');
  }
  public set minReadySec(value: number) {
    this._minReadySec = value;
  }
  public resetMinReadySec() {
    this._minReadySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecInput() {
    return this._minReadySec;
  }

  // minimal_action - computed: false, optional: false, required: true
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // most_disruptive_allowed_action - computed: false, optional: true, required: false
  private _mostDisruptiveAllowedAction?: string; 
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }
  public set mostDisruptiveAllowedAction(value: string) {
    this._mostDisruptiveAllowedAction = value;
  }
  public resetMostDisruptiveAllowedAction() {
    this._mostDisruptiveAllowedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostDisruptiveAllowedActionInput() {
    return this._mostDisruptiveAllowedAction;
  }

  // replacement_method - computed: false, optional: true, required: false
  private _replacementMethod?: string; 
  public get replacementMethod() {
    return this.getStringAttribute('replacement_method');
  }
  public set replacementMethod(value: string) {
    this._replacementMethod = value;
  }
  public resetReplacementMethod() {
    this._replacementMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementMethodInput() {
    return this._replacementMethod;
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
export interface GoogleComputeRegionInstanceGroupManagerVersionTargetSize {
  /**
  * The number of instances which are managed for this version. Conflicts with percent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#fixed GoogleComputeRegionInstanceGroupManager#fixed}
  */
  readonly fixed?: number;
  /**
  * The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#percent GoogleComputeRegionInstanceGroupManager#percent}
  */
  readonly percent?: number;
}

export function googleComputeRegionInstanceGroupManagerVersionTargetSizeToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference | GoogleComputeRegionInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerVersionTargetSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerVersionTargetSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleComputeRegionInstanceGroupManagerVersion {
  /**
  * The full URL to an instance template from which all new instances of this version will be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#instance_template GoogleComputeRegionInstanceGroupManager#instance_template}
  */
  readonly instanceTemplate: string;
  /**
  * Version name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}
  */
  readonly name?: string;
  /**
  * target_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}
  */
  readonly targetSize?: GoogleComputeRegionInstanceGroupManagerVersionTargetSize;
}

export function googleComputeRegionInstanceGroupManagerVersionToTerraform(struct?: GoogleComputeRegionInstanceGroupManagerVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_template: cdktf.stringToTerraform(struct!.instanceTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    target_size: googleComputeRegionInstanceGroupManagerVersionTargetSizeToTerraform(struct!.targetSize),
  }
}

export class GoogleComputeRegionInstanceGroupManagerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionInstanceGroupManagerVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTemplate = this._instanceTemplate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSize = this._targetSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionInstanceGroupManagerVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceTemplate = undefined;
      this._name = undefined;
      this._targetSize.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceTemplate = value.instanceTemplate;
      this._name = value.name;
      this._targetSize.internalValue = value.targetSize;
    }
  }

  // instance_template - computed: false, optional: false, required: true
  private _instanceTemplate?: string; 
  public get instanceTemplate() {
    return this.getStringAttribute('instance_template');
  }
  public set instanceTemplate(value: string) {
    this._instanceTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTemplateInput() {
    return this._instanceTemplate;
  }

  // name - computed: false, optional: true, required: false
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

  // target_size - computed: false, optional: true, required: false
  private _targetSize = new GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(this, "target_size");
  public get targetSize() {
    return this._targetSize;
  }
  public putTargetSize(value: GoogleComputeRegionInstanceGroupManagerVersionTargetSize) {
    this._targetSize.internalValue = value;
  }
  public resetTargetSize() {
    this._targetSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize.internalValue;
  }
}

export class GoogleComputeRegionInstanceGroupManagerVersionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionInstanceGroupManagerVersion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionInstanceGroupManagerVersionOutputReference {
    return new GoogleComputeRegionInstanceGroupManagerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager google_compute_region_instance_group_manager}
*/
export class GoogleComputeRegionInstanceGroupManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_instance_group_manager";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_region_instance_group_manager google_compute_region_instance_group_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionInstanceGroupManagerConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_group_manager',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.33.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseInstanceName = config.baseInstanceName;
    this._description = config.description;
    this._distributionPolicyTargetShape = config.distributionPolicyTargetShape;
    this._distributionPolicyZones = config.distributionPolicyZones;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
    this._waitForInstancesStatus = config.waitForInstancesStatus;
    this._allInstancesConfig.internalValue = config.allInstancesConfig;
    this._autoHealingPolicies.internalValue = config.autoHealingPolicies;
    this._namedPort.internalValue = config.namedPort;
    this._statefulDisk.internalValue = config.statefulDisk;
    this._timeouts.internalValue = config.timeouts;
    this._updatePolicy.internalValue = config.updatePolicy;
    this._version.internalValue = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_instance_name - computed: false, optional: false, required: true
  private _baseInstanceName?: string; 
  public get baseInstanceName() {
    return this.getStringAttribute('base_instance_name');
  }
  public set baseInstanceName(value: string) {
    this._baseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInstanceNameInput() {
    return this._baseInstanceName;
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

  // distribution_policy_target_shape - computed: true, optional: true, required: false
  private _distributionPolicyTargetShape?: string; 
  public get distributionPolicyTargetShape() {
    return this.getStringAttribute('distribution_policy_target_shape');
  }
  public set distributionPolicyTargetShape(value: string) {
    this._distributionPolicyTargetShape = value;
  }
  public resetDistributionPolicyTargetShape() {
    this._distributionPolicyTargetShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyTargetShapeInput() {
    return this._distributionPolicyTargetShape;
  }

  // distribution_policy_zones - computed: true, optional: true, required: false
  private _distributionPolicyZones?: string[]; 
  public get distributionPolicyZones() {
    return cdktf.Fn.tolist(this.getListAttribute('distribution_policy_zones'));
  }
  public set distributionPolicyZones(value: string[]) {
    this._distributionPolicyZones = value;
  }
  public resetDistributionPolicyZones() {
    this._distributionPolicyZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyZonesInput() {
    return this._distributionPolicyZones;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleComputeRegionInstanceGroupManagerStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // target_pools - computed: false, optional: true, required: false
  private _targetPools?: string[]; 
  public get targetPools() {
    return cdktf.Fn.tolist(this.getListAttribute('target_pools'));
  }
  public set targetPools(value: string[]) {
    this._targetPools = value;
  }
  public resetTargetPools() {
    this._targetPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools;
  }

  // target_size - computed: true, optional: true, required: false
  private _targetSize?: number; 
  public get targetSize() {
    return this.getNumberAttribute('target_size');
  }
  public set targetSize(value: number) {
    this._targetSize = value;
  }
  public resetTargetSize() {
    this._targetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize;
  }

  // wait_for_instances - computed: false, optional: true, required: false
  private _waitForInstances?: boolean | cdktf.IResolvable; 
  public get waitForInstances() {
    return this.getBooleanAttribute('wait_for_instances');
  }
  public set waitForInstances(value: boolean | cdktf.IResolvable) {
    this._waitForInstances = value;
  }
  public resetWaitForInstances() {
    this._waitForInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesInput() {
    return this._waitForInstances;
  }

  // wait_for_instances_status - computed: false, optional: true, required: false
  private _waitForInstancesStatus?: string; 
  public get waitForInstancesStatus() {
    return this.getStringAttribute('wait_for_instances_status');
  }
  public set waitForInstancesStatus(value: string) {
    this._waitForInstancesStatus = value;
  }
  public resetWaitForInstancesStatus() {
    this._waitForInstancesStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesStatusInput() {
    return this._waitForInstancesStatus;
  }

  // all_instances_config - computed: false, optional: true, required: false
  private _allInstancesConfig = new GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(this, "all_instances_config");
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }
  public putAllInstancesConfig(value: GoogleComputeRegionInstanceGroupManagerAllInstancesConfig) {
    this._allInstancesConfig.internalValue = value;
  }
  public resetAllInstancesConfig() {
    this._allInstancesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInstancesConfigInput() {
    return this._allInstancesConfig.internalValue;
  }

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies = new GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(this, "auto_healing_policies");
  public get autoHealingPolicies() {
    return this._autoHealingPolicies;
  }
  public putAutoHealingPolicies(value: GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies) {
    this._autoHealingPolicies.internalValue = value;
  }
  public resetAutoHealingPolicies() {
    this._autoHealingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingPoliciesInput() {
    return this._autoHealingPolicies.internalValue;
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort = new GoogleComputeRegionInstanceGroupManagerNamedPortList(this, "named_port", true);
  public get namedPort() {
    return this._namedPort;
  }
  public putNamedPort(value: GoogleComputeRegionInstanceGroupManagerNamedPort[] | cdktf.IResolvable) {
    this._namedPort.internalValue = value;
  }
  public resetNamedPort() {
    this._namedPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortInput() {
    return this._namedPort.internalValue;
  }

  // stateful_disk - computed: false, optional: true, required: false
  private _statefulDisk = new GoogleComputeRegionInstanceGroupManagerStatefulDiskList(this, "stateful_disk", true);
  public get statefulDisk() {
    return this._statefulDisk;
  }
  public putStatefulDisk(value: GoogleComputeRegionInstanceGroupManagerStatefulDisk[] | cdktf.IResolvable) {
    this._statefulDisk.internalValue = value;
  }
  public resetStatefulDisk() {
    this._statefulDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDiskInput() {
    return this._statefulDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionInstanceGroupManagerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(this, "update_policy");
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: GoogleComputeRegionInstanceGroupManagerUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version = new GoogleComputeRegionInstanceGroupManagerVersionList(this, "version", false);
  public get version() {
    return this._version;
  }
  public putVersion(value: GoogleComputeRegionInstanceGroupManagerVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_instance_name: cdktf.stringToTerraform(this._baseInstanceName),
      description: cdktf.stringToTerraform(this._description),
      distribution_policy_target_shape: cdktf.stringToTerraform(this._distributionPolicyTargetShape),
      distribution_policy_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._distributionPolicyZones),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      target_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetPools),
      target_size: cdktf.numberToTerraform(this._targetSize),
      wait_for_instances: cdktf.booleanToTerraform(this._waitForInstances),
      wait_for_instances_status: cdktf.stringToTerraform(this._waitForInstancesStatus),
      all_instances_config: googleComputeRegionInstanceGroupManagerAllInstancesConfigToTerraform(this._allInstancesConfig.internalValue),
      auto_healing_policies: googleComputeRegionInstanceGroupManagerAutoHealingPoliciesToTerraform(this._autoHealingPolicies.internalValue),
      named_port: cdktf.listMapper(googleComputeRegionInstanceGroupManagerNamedPortToTerraform, true)(this._namedPort.internalValue),
      stateful_disk: cdktf.listMapper(googleComputeRegionInstanceGroupManagerStatefulDiskToTerraform, true)(this._statefulDisk.internalValue),
      timeouts: googleComputeRegionInstanceGroupManagerTimeoutsToTerraform(this._timeouts.internalValue),
      update_policy: googleComputeRegionInstanceGroupManagerUpdatePolicyToTerraform(this._updatePolicy.internalValue),
      version: cdktf.listMapper(googleComputeRegionInstanceGroupManagerVersionToTerraform, true)(this._version.internalValue),
    };
  }
}
