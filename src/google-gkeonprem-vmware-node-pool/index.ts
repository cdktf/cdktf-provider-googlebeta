/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeonpremVmwareNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations on the node Pool.
This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#annotations GoogleGkeonpremVmwareNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The display name for the node pool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#display_name GoogleGkeonpremVmwareNodePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#location GoogleGkeonpremVmwareNodePool#location}
  */
  readonly location: string;
  /**
  * The vmware node pool name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#name GoogleGkeonpremVmwareNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}
  */
  readonly project?: string;
  /**
  * The cluster this node pool belongs to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#vmware_cluster GoogleGkeonpremVmwareNodePool#vmware_cluster}
  */
  readonly vmwareCluster: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#config GoogleGkeonpremVmwareNodePool#config}
  */
  readonly config: GoogleGkeonpremVmwareNodePoolConfigA;
  /**
  * node_pool_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#node_pool_autoscaling GoogleGkeonpremVmwareNodePool#node_pool_autoscaling}
  */
  readonly nodePoolAutoscaling?: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#timeouts GoogleGkeonpremVmwareNodePool#timeouts}
  */
  readonly timeouts?: GoogleGkeonpremVmwareNodePoolTimeouts;
}
export interface GoogleGkeonpremVmwareNodePoolStatusConditions {
}

export function googleGkeonpremVmwareNodePoolStatusConditionsToTerraform(struct?: GoogleGkeonpremVmwareNodePoolStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareNodePoolStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleGkeonpremVmwareNodePoolStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference {
    return new GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareNodePoolStatus {
}

export function googleGkeonpremVmwareNodePoolStatusToTerraform(struct?: GoogleGkeonpremVmwareNodePoolStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleGkeonpremVmwareNodePoolStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareNodePoolStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleGkeonpremVmwareNodePoolStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleGkeonpremVmwareNodePoolStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareNodePoolStatusOutputReference {
    return new GoogleGkeonpremVmwareNodePoolStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags {
}

export function googleGkeonpremVmwareNodePoolConfigVsphereConfigTagsToTerraform(struct?: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference {
    return new GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareNodePoolConfigVsphereConfig {
}

export function googleGkeonpremVmwareNodePoolConfigVsphereConfigToTerraform(struct?: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareNodePoolConfigVsphereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datastore - computed: true, optional: false, required: false
  public get datastore() {
    return this.getStringAttribute('datastore');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference {
    return new GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareNodePoolConfigTaints {
  /**
  * Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#effect GoogleGkeonpremVmwareNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#key GoogleGkeonpremVmwareNodePool#key}
  */
  readonly key: string;
  /**
  * Value associated with the effect.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#value GoogleGkeonpremVmwareNodePool#value}
  */
  readonly value: string;
}

export function googleGkeonpremVmwareNodePoolConfigTaintsToTerraform(struct?: GoogleGkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolConfigTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference {
    return new GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareNodePoolConfigA {
  /**
  * VMware disk size to be used during creation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#boot_disk_size_gb GoogleGkeonpremVmwareNodePool#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The number of CPUs for each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#cpus GoogleGkeonpremVmwareNodePool#cpus}
  */
  readonly cpus?: number;
  /**
  * Allow node pool traffic to be load balanced. Only works for clusters with
MetalLB load balancers.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#enable_load_balancer GoogleGkeonpremVmwareNodePool#enable_load_balancer}
  */
  readonly enableLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * The OS image name in vCenter, only valid when using Windows.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image GoogleGkeonpremVmwareNodePool#image}
  */
  readonly image?: string;
  /**
  * The OS image to be used for each node in a node pool.
Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image_type GoogleGkeonpremVmwareNodePool#image_type}
  */
  readonly imageType: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node.
These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#labels GoogleGkeonpremVmwareNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The megabytes of memory for each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#memory_mb GoogleGkeonpremVmwareNodePool#memory_mb}
  */
  readonly memoryMb?: number;
  /**
  * The number of nodes in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#replicas GoogleGkeonpremVmwareNodePool#replicas}
  */
  readonly replicas?: number;
  /**
  * taints block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#taints GoogleGkeonpremVmwareNodePool#taints}
  */
  readonly taints?: GoogleGkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareNodePoolConfigAToTerraform(struct?: GoogleGkeonpremVmwareNodePoolConfigAOutputReference | GoogleGkeonpremVmwareNodePoolConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    enable_load_balancer: cdktf.booleanToTerraform(struct!.enableLoadBalancer),
    image: cdktf.stringToTerraform(struct!.image),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    taints: cdktf.listMapper(googleGkeonpremVmwareNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}

export class GoogleGkeonpremVmwareNodePoolConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareNodePoolConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._enableLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLoadBalancer = this._enableLoadBalancer;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._cpus = undefined;
      this._enableLoadBalancer = undefined;
      this._image = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._memoryMb = undefined;
      this._replicas = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._cpus = value.cpus;
      this._enableLoadBalancer = value.enableLoadBalancer;
      this._image = value.image;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._memoryMb = value.memoryMb;
      this._replicas = value.replicas;
      this._taints.internalValue = value.taints;
    }
  }

  // boot_disk_size_gb - computed: false, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // enable_load_balancer - computed: false, optional: true, required: false
  private _enableLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableLoadBalancer() {
    return this.getBooleanAttribute('enable_load_balancer');
  }
  public set enableLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableLoadBalancer = value;
  }
  public resetEnableLoadBalancer() {
    this._enableLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoadBalancerInput() {
    return this._enableLoadBalancer;
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

  // image_type - computed: false, optional: false, required: true
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
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

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // vsphere_config - computed: true, optional: false, required: false
  private _vsphereConfig = new GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList(this, "vsphere_config", false);
  public get vsphereConfig() {
    return this._vsphereConfig;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GoogleGkeonpremVmwareNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GoogleGkeonpremVmwareNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling {
  /**
  * Maximum number of replicas in the NodePool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#max_replicas GoogleGkeonpremVmwareNodePool#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Minimum number of replicas in the NodePool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#min_replicas GoogleGkeonpremVmwareNodePool#min_replicas}
  */
  readonly minReplicas: number;
}

export function googleGkeonpremVmwareNodePoolNodePoolAutoscalingToTerraform(struct?: GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference | GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}

export class GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface GoogleGkeonpremVmwareNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}
  */
  readonly update?: string;
}

export function googleGkeonpremVmwareNodePoolTimeoutsToTerraform(struct?: GoogleGkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleGkeonpremVmwareNodePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}
*/
export class GoogleGkeonpremVmwareNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_vmware_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeonpremVmwareNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeonpremVmwareNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_vmware_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.72.0',
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
    this._annotations = config.annotations;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._vmwareCluster = config.vmwareCluster;
    this._config.internalValue = config.config;
    this._nodePoolAutoscaling.internalValue = config.nodePoolAutoscaling;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // on_prem_version - computed: true, optional: false, required: false
  public get onPremVersion() {
    return this.getStringAttribute('on_prem_version');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleGkeonpremVmwareNodePoolStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vmware_cluster - computed: false, optional: false, required: true
  private _vmwareCluster?: string; 
  public get vmwareCluster() {
    return this.getStringAttribute('vmware_cluster');
  }
  public set vmwareCluster(value: string) {
    this._vmwareCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareClusterInput() {
    return this._vmwareCluster;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleGkeonpremVmwareNodePoolConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleGkeonpremVmwareNodePoolConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // node_pool_autoscaling - computed: false, optional: true, required: false
  private _nodePoolAutoscaling = new GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(this, "node_pool_autoscaling");
  public get nodePoolAutoscaling() {
    return this._nodePoolAutoscaling;
  }
  public putNodePoolAutoscaling(value: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling) {
    this._nodePoolAutoscaling.internalValue = value;
  }
  public resetNodePoolAutoscaling() {
    this._nodePoolAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolAutoscalingInput() {
    return this._nodePoolAutoscaling.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeonpremVmwareNodePoolTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      vmware_cluster: cdktf.stringToTerraform(this._vmwareCluster),
      config: googleGkeonpremVmwareNodePoolConfigAToTerraform(this._config.internalValue),
      node_pool_autoscaling: googleGkeonpremVmwareNodePoolNodePoolAutoscalingToTerraform(this._nodePoolAutoscaling.internalValue),
      timeouts: googleGkeonpremVmwareNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
